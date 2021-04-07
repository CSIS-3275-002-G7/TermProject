# pull jdk15 base image
FROM openjdk:15-alpine

# set JAR_FILE arg to pull jar file from target dir
ARG JAR_FILE=target/*.jar

# copy jar into the container
COPY ${JAR_FILE} app.jar

# expose backend port
EXPOSE 8080

# set entrypoint to jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
