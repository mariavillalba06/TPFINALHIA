# Nginx inicia automáticamente
# Usa una imagen base de Node.js para construir la app
# Usa una imagen base de Node.js
FROM node:18 as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto y instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto 4200
EXPOSE 4200

# Ejecuta el servidor de desarrollo de Angular
CMD ["npm", "start"]