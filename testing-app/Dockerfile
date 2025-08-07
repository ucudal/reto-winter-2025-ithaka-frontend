FROM node:18-alpine

WORKDIR /app

# Copiar archivos de configuración
COPY testing-app/package*.json ./

# Copiar el paquete local desde fuera del contexto directo
COPY entrepreneur-ai-assistant/entrepreneur-ai-assistant-0.1.0.tgz ./entrepreneur-ai-assistant.tgz

# Instalar el paquete y luego las dependencias
RUN npm install ./entrepreneur-ai-assistant.tgz && npm install

# Copiar el resto del código
COPY testing-app .

EXPOSE 3000
CMD ["npm", "start"]
