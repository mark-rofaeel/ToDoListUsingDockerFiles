FROM node AS build
RUN mkdir -p /home/todo
WORKDIR /home/todo
RUN chown -R root:$(whoami) /home/todo
RUN chmod -R 777 /home/todo
ADD package*.json /home/todo
RUN npm install
ADD . .
EXPOSE 4200
CMD npm start