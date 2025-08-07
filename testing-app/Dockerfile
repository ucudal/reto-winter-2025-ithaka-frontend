# 1. Imagen base
FROM node:18-alpine

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar package.json y package-lock.json
COPY package.json package-lock.json ./

# 4. Copiar el paquete local (archivo .tgz)
COPY entrepreneur-ai-assistant-0.1.0.tgz ./

# 5. Instalar dependencias incluyendo el paquete local
RUN npm install ./entrepreneur-ai-assistant-0.1.0.tgz

# 6. Copiar el resto del código (después de instalar para evitar cache issues)
COPY . .

# 7. Ejecutar build
RUN npm run build

# 8. Exponer puerto si hace falta
EXPOSE 3000
