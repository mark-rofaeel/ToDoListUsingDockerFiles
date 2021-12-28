FROM node
RUN mkdir -p /home/todo
WORKDIR /home/todo
COPY package*.json /home/todo
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "/home/todo/server.js"]