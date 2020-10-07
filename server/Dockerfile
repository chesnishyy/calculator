FROM node:14.9.0


WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 8080

CMD ["npm", "run", "start"]