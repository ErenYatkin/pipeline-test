FROM node:12-alpine

WORKDIR /usr/src/app
RUN chmod -R 777 /usr/src/app

COPY packages/api/package*.json ./
COPY packages/api/. ./

RUN npm i -g @nestjs/cli
RUN npm install  --production
RUN npm run build

FROM node:12-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY packages/api/package*.json ./
COPY packages/api/. ./
COPY --from=0 /usr/src/app/dist ./dist

EXPOSE 8080

CMD ["npm", "start"]
