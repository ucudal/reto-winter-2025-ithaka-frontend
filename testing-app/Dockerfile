# 1. Imagen base
FROM node:18-alpine

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar package.json y package-lock.json
COPY package.json package-lock.json ./

# 4. Copiar el paquete local (archivo .tgz)
COPY entrepreneur-ai-assistant-0.1.0.tgz ./entrepreneur-ai-assistant.tgz

# 5. Instalar dependencias, incluyendo el paquete local
RUN npm install ./entrepreneur-ai-assistant.tgz

# 6. Copiar el resto del código
COPY . .

# 7. Construir la aplicación
RUN npm run build

# 8. Exponer puerto (opcional si no corre servidor)
EXPOSE 3000
