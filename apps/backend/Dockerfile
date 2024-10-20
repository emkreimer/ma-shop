FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./apps/backend/package*.json ./

RUN npm install

COPY ./apps/backend ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
