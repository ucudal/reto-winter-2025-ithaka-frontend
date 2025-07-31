# 1. Base image with Node
FROM node:18

# 2. Set working directory inside the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# 5. Copy the rest of the code
COPY . .

# 6. Build the application (for React / Next.js)
RUN npm run build

# 7. Expose the port (React uses 3000, your Flask used 5002)
EXPOSE 3000

# 8. Startup command
CMD ["npm", "run", "dev"]
