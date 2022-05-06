FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g typescript
RUN npm install -g ts-node

RUN npm install

COPY . .

EXPOSE 4080

CMD ["ts-node", "server.ts"]

