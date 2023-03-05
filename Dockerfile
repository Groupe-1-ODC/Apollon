FROM node:16.10.0 as base

WORKDIR /usr
#copy package.json from local to docker image
COPY package*.json ./
#run npm install commands
RUN npm install
#copy all the files from local directory to docker image
COPY . .
#this port exposed to the docker to map.
EXPOSE 3000
EXPOSE 5432

CMD [ "npm" , "start" ]