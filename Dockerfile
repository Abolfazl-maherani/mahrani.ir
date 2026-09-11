FROM node:22-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev --registry=https://mirror-npm.runflare.com \
  || npm install --omit=dev --registry=https://registry.npmmirror.com

COPY . .

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "server.js"]
