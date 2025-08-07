FROM node:20-alpine

# 1. Crear carpeta de trabajo
WORKDIR /app

# 2. Copiar archivos necesarios
COPY testing-app/package.json ./
COPY testing-app/package-lock.json ./
COPY testing-app/entrepreneur-ai-assistant-0.1.0.tgz ./

# 3. Instalar todas las dependencias (incluyendo el .tgz referenciado)
RUN npm install

# 4. Copiar el resto del código fuente
COPY testing-app .

# 5. Construir la app
RUN npm run build

# 6. Exponer puerto si hace falta
EXPOSE 3000

# 7. Comando por defecto
CMD ["npm", "start"]

