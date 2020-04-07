FROM node:13

# install simple http server for serving static content
RUN npm install -g http-server
RUN apt-get update && apt-get install -y \
  curl

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY frontend/package*.json /app

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY ./frontend /app

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
