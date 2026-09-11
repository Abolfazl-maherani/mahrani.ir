const express = require("express");
const app = express();
const path = require("path");
const LIARA_URL = process.env.LIARA_URL || 'https://mahrani.ir' || "localhost";
const { createGzip } = require('zlib');
const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

app.use(express.static("public"));

// Site map
app.get('/sitemap.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    res.header('Content-Encoding', 'gzip');

    const sitemap = new SitemapStream({ hostname: 'https://mahrani.ir/' });
    const pipeline = sitemap.pipe(createGzip());

    sitemap.write({ url: '/', changefreq: 'weekly', priority: 1.0 });
    sitemap.end();

    streamToPromise(pipeline).then(sm => {
        fs.writeFileSync('./public/sitemap.xml.gz', sm);
    });

    pipeline.pipe(res).on('error', (e) => {
        throw e;
    });
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () =>
    console.log(`app listening on port 3000 `)
);