FROM node:alpine3.10

RUN mkdir /app

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY index.js /app

CMD [ "npm", "start" ]
