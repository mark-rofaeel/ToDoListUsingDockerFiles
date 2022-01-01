FROM node
RUN mkdir -p /home/backend
WORKDIR /home/backend
COPY package*.json /home/backend
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "/home/backend/server.js"]