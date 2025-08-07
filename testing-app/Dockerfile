FROM node:18-alpine

WORKDIR /app

# Copiar package.json y lock
COPY package.json package-lock.json ./

# Copiar el paquete local
COPY ../entrepreneur-ai-assistant/entrepreneur-ai-assistant-0.1.0.tgz ./entrepreneur-ai-assistant.tgz

# Instalar dependencias, incluyendo el paquete local
RUN npm install ./entrepreneur-ai-assistant.tgz && npm install

# Copiar el resto del código
COPY . .

# Build
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
