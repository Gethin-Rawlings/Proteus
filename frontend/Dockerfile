FROM node

RUN mkdir -p /app

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

EXPOSE 80

ENV NODE_JS_PORT=80

RUN npm install






