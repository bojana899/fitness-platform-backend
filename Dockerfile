# Use Node.js 18 (full image for better compatibility)
FROM node:18

# Set working directory
WORKDIR /app

# Install build tools and dependencies
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies
COPY package*.json yarn.lock* ./
RUN yarn install --production --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

# Expose port
EXPOSE 1337

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["yarn", "start"]
