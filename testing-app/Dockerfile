# 1. Base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy dependencies
COPY package.json package-lock.json ./

# 4. Install dependencies
RUN npm ci

# 5. Copy rest of the app
COPY . .

# 6. Build the app
RUN npm run build

# 7. Expose port (si usás Next.js en modo producción)
EXPOSE 3000

# 8. Run app
CMD ["npm", "start"]

