FROM node:14.17-alpine

RUN echo "Build started"

WORKDIR /app

COPY package*.json .

RUN npm install

COPY --chown=app:app . /app/

# ENV TEST_KEY_FOR_PIPELINE=eren
# ENV PORT=4500

RUN npm run build

EXPOSE 4500

CMD ["npm", "start"]