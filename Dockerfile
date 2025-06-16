# Use the official Node.js image as a base
FROM node:20.11.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files into the working directory
COPY . .

# Expose the port Next.js will run on
EXPOSE 3000

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "run", "start"]
