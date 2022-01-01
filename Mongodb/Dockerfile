FROM mongo
VOLUME [ "/data/db" ]
RUN chmod -R go+w /data/db
WORKDIR /data
CMD mongod
EXPOSE 27017