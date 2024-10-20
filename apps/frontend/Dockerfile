FROM node:16-alpine AS build

WORKDIR /usr/src/app

COPY ./apps/frontend/package*.json ./

RUN npm install

COPY ./apps/frontend ./

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
