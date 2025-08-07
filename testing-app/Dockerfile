FROM node:18-alpine

WORKDIR /app

# Copiar solo lo necesario para instalar dependencias
COPY testing-app/package.json ./package.json
COPY testing-app/package-lock.json ./package-lock.json
COPY testing-app/entrepreneur-ai-assistant-0.1.0.tgz ./entrepreneur-ai-assistant-0.1.0.tgz

RUN npm install

# Copiar el resto del código
COPY testing-app/. .

# Build de la app Next.js
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
