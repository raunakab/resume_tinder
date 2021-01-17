FROM node:alpine

WORKDIR /web

COPY package.json ./

COPY package-lock.json ./

COPY tsconfig.json ./

COPY ./src/ ./src/

RUN npm install

EXPOSE 8080
CMD ["npm", "start"]
