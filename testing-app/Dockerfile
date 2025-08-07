FROM node:18-alpine

WORKDIR /app

# Copiar todo lo necesario, incluido el .tgz
COPY . .

# Instalar dependencias (se respeta el package-lock.json actualizado)
RUN npm install

# Build de la app Next.js
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
