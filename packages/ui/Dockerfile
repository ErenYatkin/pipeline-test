FROM node:14.17-alpine as development

RUN apk --no-cache add git

WORKDIR /usr/src/app
RUN chmod -R 777 /usr/src/app

COPY package*.json ./
COPY . ./

RUN yarn install

EXPOSE 3001

RUN yarn build
