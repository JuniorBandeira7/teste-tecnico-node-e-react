FROM node:latest


WORKDIR /api

COPY package*.json ./

RUN rm -rf node_modules package-lock.json

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "./index.js"]
