FROM node:18-alpine

WORKDIR /app

# Copiar package.json y el paquete local
COPY package.json package-lock.json ./
COPY ../entrepreneur-ai-assistant/entrepreneur-ai-assistant-0.1.0.tgz ./entrepreneur-ai-assistant.tgz

# Instalar dependencias (incluyendo .tgz)
RUN npm install ./entrepreneur-ai-assistant.tgz && npm install

# Copiar el resto del código
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
