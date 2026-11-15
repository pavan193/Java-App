FROM eclipse-temurin:17-jre
WORKDIR /app
COPY target/webapp.jar /app/webapp.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/webapp.jar"]