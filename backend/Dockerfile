FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* tsconfig.json ./

RUN npm install

COPY src ./src

RUN npm run build

EXPOSE 5000

CMD ["node", "dist/server.js"]
