FROM node:18-alpine

# 1. Crear carpeta de trabajo
WORKDIR /app

# 2. Copiar toda la app de una sola vez, incluyendo el .tgz
COPY testing-app/ ./

# 3. Instalar dependencias (incluye .tgz correctamente)
RUN npm install

# 4. Build de la app Next.js
RUN npm run build

# 5. Exponer el puerto
EXPOSE 3000

# 6. Comando por defecto
CMD ["npm", "start"]
