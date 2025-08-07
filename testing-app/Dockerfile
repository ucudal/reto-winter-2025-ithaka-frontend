# Dockerfile final — testing-app/Dockerfile

FROM node:18-alpine

# 1. Establecer directorio de trabajo
WORKDIR /app

# 2. Copiar package.json y lock
COPY testing-app/package.json .
COPY testing-app/package-lock.json .

# 3. Copiar el .tgz del paquete local
COPY testing-app/entrepreneur-ai-assistant-0.1.0.tgz .

# 4. Instalar todas las dependencias (incluyendo el tgz desde package.json)
RUN npm install

# 5. Copiar el resto del código
COPY testing-app .

# 6. Construir la app
RUN npm run build

# 7. Exponer puerto si hace falta
EXPOSE 3000

# 8. Comando por defecto
CMD ["npm", "start"]
