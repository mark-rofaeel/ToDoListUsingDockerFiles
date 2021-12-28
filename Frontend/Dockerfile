FROM node AS build
WORKDIR /home/todo
COPY package*.json /home/todo
RUN npm install
COPY . .
RUN npm install -g @angular/cli 
EXPOSE 4200
CMD ng serve --host 0.0.0.0