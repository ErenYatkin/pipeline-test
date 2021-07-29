FROM node:12-alpine

WORKDIR /usr/src/app
RUN chmod -R 777 /usr/src/app

COPY packages/api/package*.json ./
COPY packages/api/. ./

RUN yarn
RUN yarn build
ENV NODE_ENV=production

EXPOSE 8080

CMD ["node", "dist/main"]
