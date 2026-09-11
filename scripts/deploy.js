const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");
const { Client } = require("ssh2");
require("dotenv").config({
  path: path.join(__dirname, "..", ".env"),
  quiet: true,
});

const ROOT = path.join(__dirname, "..");
const ENV_PATH = path.join(ROOT, ".env");
const ENV_EXAMPLE_PATH = path.join(ROOT, ".env.example");

const EXCLUDES = [
  "node_modules",
  ".git",
  ".env",
  "repomix-output.xml",
];

function fail(message) {
  console.error(`\n[deploy] ${message}`);
  process.exit(1);
}

function loadConfig() {
  if (!fs.existsSync(ENV_PATH)) {
    if (fs.existsSync(ENV_EXAMPLE_PATH)) {
      fs.copyFileSync(ENV_EXAMPLE_PATH, ENV_PATH);
    }
    fail(
      "`.env` was missing. A sample file was created; set `SSH_HOST` and `SSH_PASSWORD`, then run `yarn deploy` again."
    );
  }

  const host = process.env.SSH_HOST && process.env.SSH_HOST.trim();
  const password = process.env.SSH_PASSWORD;
  const user = (process.env.SSH_USER || "root").trim();
  const sshPort = Number(process.env.SSH_PORT || 22);
  const deployPath = (process.env.DEPLOY_PATH || "/opt/mahrani.ir").trim();
  const containerName = (process.env.CONTAINER_NAME || "mahrani").trim();
  const networkName = (process.env.DOCKER_NETWORK || "mahrani_net").trim();

  if (!host || host === "1.2.3.4") {
    fail("Replace `SSH_HOST` in `.env` with the server IP.");
  }
  if (!password || password === "your-server-password") {
    fail("Set `SSH_PASSWORD` in `.env`.");
  }
  if (!Number.isInteger(sshPort) || sshPort < 1) {
    fail("Invalid `SSH_PORT`.");
  }

  return { host, password, user, sshPort, deployPath, containerName, networkName };
}

function createArchive() {
  const archivePath = path.join(os.tmpdir(), `mahrani-deploy-${Date.now()}.tar.gz`);
  const args = ["-czf", archivePath, "-C", ROOT];

  for (const item of EXCLUDES) {
    args.push(`--exclude=${item}`);
  }

  args.push(".");

  console.log("[deploy] Packaging project...");
  const result = spawnSync("tar", args, { stdio: "inherit", shell: false });

  if (result.error || result.status !== 0) {
    fail(
      "`tar` failed to create the archive. On Windows 10 and later, `tar` should already be available."
    );
  }

  return archivePath;
}

function sshConnect(config) {
  const conn = new Client();

  return new Promise((resolve, reject) => {
    conn
      .on("ready", () => resolve(conn))
      .on("error", reject)
      .connect({
        host: config.host,
        port: config.sshPort,
        username: config.user,
        password: config.password,
        readyTimeout: 20000,
        keepaliveInterval: 10000,
        keepaliveCountMax: 10,
      });
  });
}

function execCommand(conn, command, options = {}) {
  const { stdin, silent = false } = options;

  return new Promise((resolve, reject) => {
    conn.exec(command, (err, stream) => {
      if (err) {
        reject(err);
        return;
      }

      let stdout = "";
      let stderr = "";

      stream.on("data", (data) => {
        const text = data.toString();
        stdout += text;
        if (!silent) {
          process.stdout.write(text);
        }
      });

      stream.stderr.on("data", (data) => {
        const text = data.toString();
        stderr += text;
        if (!silent) {
          process.stderr.write(text);
        }
      });

      stream.on("close", (code) => {
        if (code !== 0) {
          reject(
            new Error(stderr.trim() || stdout.trim() || `Remote command failed with exit code ${code}`)
          );
          return;
        }
        resolve(stdout);
      });

      if (stdin != null) {
        stream.end(stdin);
      }
    });
  });
}

async function execSudo(conn, command, password) {
  try {
    await execCommand(conn, "sudo -n true", { silent: true });
    return execCommand(conn, `sudo -n bash -lc ${shellQuote(command)}`);
  } catch (_) {
    return execCommand(conn, `sudo -S -p '' bash -lc ${shellQuote(command)}`, {
      stdin: `${password}\n`,
    });
  }
}

function getSftp(conn) {
  return new Promise((resolve, reject) => {
    conn.sftp((err, sftp) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(sftp);
    });
  });
}

function uploadFile(sftp, localPath, remotePath) {
  return new Promise((resolve, reject) => {
    const onError = (err) => reject(err || new Error("SFTP session error"));

    sftp.once("error", onError);
    sftp.fastPut(localPath, remotePath, (err) => {
      sftp.removeListener("error", onError);
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

function shellQuote(value) {
  return `'${String(value).replace(/'/g, `'\\''`)}'`;
}

async function deploy() {
  const config = loadConfig();
  const archivePath = createArchive();
  const remoteArchive = `/tmp/mahrani-deploy.tar.gz`;
  const deployPath = shellQuote(config.deployPath);

  console.log(
    `[deploy] Connecting over SSH to ${config.user}@${config.host}:${config.sshPort}...`
  );

  let conn;
  let sshClosedUnexpectedly = "";
  let deployFinished = false;
  try {
    conn = await sshConnect(config);
    conn.on("error", (err) => {
      if (!deployFinished) {
        sshClosedUnexpectedly = err.message || String(err);
      }
    });
    conn.on("close", () => {
      if (!deployFinished && !sshClosedUnexpectedly) {
        sshClosedUnexpectedly = "SSH connection closed unexpectedly.";
      }
    });
    console.log("[deploy] Connected.");

    await execCommand(conn, "docker --version");

    try {
      await execCommand(conn, `mkdir -p ${deployPath}`);
    } catch (error) {
      const message = error.message || "";
      if (!/permission denied/i.test(message)) {
        throw error;
      }
      console.log("[deploy] Could not create the path as the current user; retrying with `sudo`...");
      await execSudo(
        conn,
        `mkdir -p ${config.deployPath} && chown ${config.user}:${config.user} ${config.deployPath}`,
        config.password
      );
    }

    const archiveBytes = fs.statSync(archivePath).size;
    console.log(
      `[deploy] Uploading archive (${Math.max(1, Math.round(archiveBytes / 1024))} KB)...`
    );
    const sftp = await getSftp(conn);
    await uploadFile(sftp, archivePath, remoteArchive);
    sftp.end();
    if (sshClosedUnexpectedly) {
      throw new Error(sshClosedUnexpectedly);
    }
    console.log("[deploy] Archive uploaded.");

    console.log("[deploy] Extracting files on the server...");
    await execCommand(
      conn,
      `tar -xzf ${shellQuote(remoteArchive)} -C ${deployPath} && rm -f ${shellQuote(remoteArchive)}`
    );

    console.log("[deploy] Building image and starting Docker container...");
    const dockerScript = [
      "set -e",
      `cd ${config.deployPath}`,
      `docker network create ${config.networkName} >/dev/null 2>&1 || true`,
      `docker build -t ${config.containerName} .`,
      `docker stop ${config.containerName} >/dev/null 2>&1 || true`,
      `docker rm ${config.containerName} >/dev/null 2>&1 || true`,
      `docker run -d --name ${config.containerName} --restart unless-stopped --network ${config.networkName} -p 127.0.0.1:3000:3000 ${config.containerName}`,
      `docker ps --filter name=${config.containerName} --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'`,
    ].join("\n");

    try {
      await execCommand(conn, `bash -lc ${shellQuote(dockerScript)}`);
    } catch (error) {
      const message = error.message || "";
      if (!/permission denied/i.test(message)) {
        throw error;
      }
      console.log("[deploy] Docker could not run without sudo; retrying with `sudo`...");
      await execSudo(conn, dockerScript, config.password);
    }

    console.log(
      `\n[deploy] Done. Host nginx can proxy to http://127.0.0.1:3000, or reach the container on Docker network \`${config.networkName}\` at http://${config.containerName}:3000.`
    );
  } catch (error) {
    const message = error.message || String(error);
    if (/docker: (not found|command not found)/i.test(message)) {
      fail("`docker` is not installed on the server or is not in the SSH user's `PATH`.");
    }
    fail(message);
  } finally {
    deployFinished = true;
    if (conn) {
      conn.end();
    }
    if (fs.existsSync(archivePath)) {
      fs.unlinkSync(archivePath);
    }
  }
}

deploy().catch((error) => {
  fail(error.message || String(error));
});
