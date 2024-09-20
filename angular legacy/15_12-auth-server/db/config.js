const mongoose = require('mongoose');



const dbConnection = async()=>{

    try {
        
      await  mongoose.connect(process.env.BD_CNN)
      console.log('Base de datos Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
        
    }
}
module.exports={
    dbConnection
}