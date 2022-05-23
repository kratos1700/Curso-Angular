const express = require('express')
const cors = require('cors');
const { dbConnection } = require('./db/config');
const  path  = require('path');
require('dotenv').config();

// crear el server de express
const app= express();

//Conexion a la bd
dbConnection();

//directorio publico
app.use(express.static('public'));

//Cors
app.use(cors());

//Lectura parseo body
app.use(express.json());

//rutas
app.use('/api/auth', require('./routes/auth.routes'));

//opcion para las rutas a manejar
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'public/index.html'))
})



app.listen(process.env.PORT, ()=>{
    console.log(`Servidor escuchando puerto ${process.env.PORT}`);
})