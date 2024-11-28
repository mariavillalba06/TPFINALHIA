const mongoose = require('mongoose'); 
require('dotenv').config(); // Cargar las variables de entorno del archivo .env

const URI = process.env.MONGO_URI; // Obtener la cadena de conexión desde la variable de entorno

mongoose.connect(URI) 
.then(db=>console.log('DB is connected')) 
.catch(err=>console.error(err))

module.exports = mongoose; 