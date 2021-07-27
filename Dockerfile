FROM node:14.17-alpine AS development

WORKDIR /usr/src/app
RUN chmod -R 777 /usr/src/app

COPY packages/api/package*.json ./

RUN npm install

COPY packages/api/. ./

RUN npm run build

FROM node:14.17-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY packages/api/package*.json ./

COPY packages/api/. ./

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 8080

CMD ["node", "dist/main"]
