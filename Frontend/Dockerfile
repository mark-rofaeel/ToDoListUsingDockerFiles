FROM node AS build
RUN mkdir -p /home/todo
WORKDIR /home/todo
COPY package*.json /home/todo
RUN npm install
COPY . .
EXPOSE 4200
CMD npm start