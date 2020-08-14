FROM node:10-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
# Install app dependencies
COPY package*.json ./
USER node
ENV MYSQL_USER root
ENV MYSQL_PASSWORD example
ENV MYSQL_DB preferences
ENV MYSQL_HOST database
RUN npm install
COPY --chown=node:node . .
CMD [ "node", "index.js" ]