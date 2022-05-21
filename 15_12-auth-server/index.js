const express = require('express')

// crear el server de express
const app= express();


//get
app.get('/',(req, res)=>{
    console.log('Peticion en el /');
    res.status(200).json({
        ok:true,
        msg:"Peticion correcta"
    })
})



app.listen(4000, ()=>{
    console.log(`Servidor escuchando puerto ${4000}`);
})