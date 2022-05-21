const {response}= require('express')

const crearUsuario = (req, res= response) => {
  return res.json({
    ok: true,
    msg: "Crear usuario /new",
  });
};

const login = (req,res= response)=>{
    return res.json({
        ok:true,
        msg:"Login usuarios /"
    })
}

const renovarToken = (req,res=response)=>{
    return res.json({
        ok:true,
        msg:"Validar revalidar token /renew"
    })
}



module.exports={
    crearUsuario,
    login,
    renovarToken
}