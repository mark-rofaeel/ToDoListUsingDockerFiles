FROM quay.io/bitnami/node
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4200
ENTRYPOINT [ "sudo npm start"]