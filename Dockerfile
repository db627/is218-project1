FROM node:14.16.1-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your application will listen on
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
