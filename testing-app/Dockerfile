# 1. Imagen base
FROM node:18-alpine

# 2. Establecer directorio de trabajo
WORKDIR /app

# 3. Copiar archivos necesarios para instalar dependencias (incluyendo el .tgz)
COPY testing-app/package.json ./
COPY testing-app/package-lock.json ./
COPY testing-app/entrepreneur-ai-assistant-0.1.0.tgz ./

# 4. Instalar todas las dependencias (el .tgz está referenciado en package.json)
RUN npm install

# 5. Copiar el resto del código fuente
COPY testing-app .

# 6. Construir la app
RUN npm run build

# 7. Exponer el puerto si hace falta (opcional, por ejemplo 3000 para Next.js)
EXPOSE 3000

# 8. Comando por defecto para producción
CMD ["npm", "start"]
