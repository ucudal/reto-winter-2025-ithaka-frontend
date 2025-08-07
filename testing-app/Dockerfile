# Dockerfile final dentro de testing-app/

FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y lock
COPY package.json package-lock.json ./

# Copiar el paquete local tgz
COPY entrepreneur-ai-assistant-0.1.0.tgz ./entrepreneur-ai-assistant.tgz

# Instalar dependencias, incluyendo el paquete local
RUN npm install ./entrepreneur-ai-assistant.tgz && npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]
