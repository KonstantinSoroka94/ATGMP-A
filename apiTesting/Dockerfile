# Use a Node.js base image
FROM node:14

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Set the command to run the tests
CMD ["npm", "run", "test-axios"]
