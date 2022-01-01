FROM mongo
VOLUME [ "/data/db" ]
RUN sudo chmod -R go+w /data/db
WORKDIR /data
CMD mongod
EXPOSE 27017