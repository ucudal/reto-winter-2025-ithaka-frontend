# 1. Establecer imagen base
FROM node:18-alpine

# 2. Establecer directorio de trabajo
WORKDIR /app

# 3. Copiar archivos necesarios
COPY testing-app/package.json ./
COPY testing-app/package-lock.json ./
COPY testing-app/entrepreneur-ai-assistant-0.1.0.tgz ./

# 4. Copiar el resto del código fuente
COPY testing-app .

# 5. Instalar todas las dependencias (el .tgz está referenciado en package.json)
RUN npm install

# 6. Construir la aplicación
RUN npm run build

# 7. Exponer puerto (opcional si no corre servidor)
EXPOSE 3000

# 8. Comando por defecto (opcional)
CMD ["npm", "start"]
