FROM node

RUN mkdir -p /app

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

EXPOSE 5000

ENV NODE_JS_PORT=5000

RUN npm install

RUN npm install nodemon -g

RUN cd /app/src/

