# 1. Base image with Node
FROM node:18-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy dependencies including .tgz
COPY package.json package-lock.json entrepreneur-ai-assistant-0.1.0.tgz ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the code
COPY . .

# 6. Build the application (for React / Next.js)
RUN npm run build

# 7. Expose the port (React uses 3000)
EXPOSE 3000

# 8. Startup command
CMD ["npm", "start"]
