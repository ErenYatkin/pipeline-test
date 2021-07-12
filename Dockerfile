FROM node:14.17-alpine

RUN echo "Build started"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]