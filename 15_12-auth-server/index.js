const express = require('express')

// crear el server de express
const app= express();


//rutas
app.use('/api/auth', require('./routes/auth.routes'));



app.listen(4000, ()=>{
    console.log(`Servidor escuchando puerto ${4000}`);
})