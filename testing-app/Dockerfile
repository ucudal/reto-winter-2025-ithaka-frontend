# 1. Imagen base con Node
FROM node:18

# 2. Establecer directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar archivos de dependencias
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del código
COPY . .

# 6. Construir la aplicación (para React / Next.js)
RUN npm run build

# 7. Exponer el puerto (React usa 3000, tu Flask usaba 5002)
EXPOSE 3000

# 8. Comando de inicio
CMD ["npm", "run", "dev"]
