# Docker image
FROM node:14-alpine

# Copy package.json and package-lock.json to a temporary folder
COPY ./package*.json /modules/

# Install the node modules in the temporary folder
WORKDIR /modules
RUN npm i --only=production

# Set the app path
WORKDIR /app

# Copy the app
COPY . .

# Removes the node_modules directory that may exist when building on a local machine
RUN rm -rf /app/node_modules

# Moves the previously created node_modules directory into the app folder
RUN mv /modules/node_modules /app

# The port is exposed in gitlab-ci.yml
CMD [ "node", "-r", "esm", "index.js" ]
