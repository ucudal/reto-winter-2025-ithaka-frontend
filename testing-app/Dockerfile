FROM node:18-alpine

WORKDIR /app

# Copiar solo lo necesario para instalar dependencias
COPY package.json ./
COPY package-lock.json ./
COPY entrepreneur-ai-assistant-0.1.0.tgz ./

RUN npm install

# Copiar el resto del código
COPY . .

# Build de la app Next.js
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
