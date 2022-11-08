# syntax=docker/dockerfile:1
FROM node:12-alpine
WORKDIR /nodejs-api-todolist 
COPY . .
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 3030