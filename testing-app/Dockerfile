# Dockerfile (ubicado dentro de testing-app/)

FROM node:18-alpine

# 1. Crear carpeta y definirla como directorio de trabajo
WORKDIR /app

# 2. Copiar archivos desde el contexto actual (donde ya estamos en testing-app/)
COPY package.json .
COPY package-lock.json .
COPY entrepreneur-ai-assistant-0.1.0.tgz .

# 3. Instalar todas las dependencias (incluyendo el tgz referenciado en package.json)
RUN npm install

# 4. Copiar el resto del código fuente (desde dentro de testing-app/)
COPY . .

# 5. Construir la app
RUN npm run build

# 6. Exponer puerto
EXPOSE 3000

# 7. Comando de inicio
CMD ["npm", "start"]
