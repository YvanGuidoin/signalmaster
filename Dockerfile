FROM node:8

RUN groupadd -r nodejs && useradd -m -r -g nodejs nodejs
USER nodejs

ENV NODE_ENV=production
ENV APP_DIR=/home/nodejs/app
RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR

COPY package.json $APP_DIR
COPY package-lock.json $APP_DIR
RUN npm i --quiet
COPY . $APP_DIR

CMD ["node", "server.js"]
