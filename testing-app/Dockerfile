# Construction phase
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application.
RUN npm run build

# Production stage.
FROM nginx:alpine

# Copy built files from the previous stage.
COPY --from=build /app/build /usr/share/nginx/html
