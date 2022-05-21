const {Router} = require('express');

const router= Router();

// crear un nuevo usuario
router.post('/new',(req,res)=>{
    return res.json({
        ok:true,
        msg:"Crear usuario /new"
    })
});


// Login usuario
router.post('/',(req,res)=>{
    return res.json({
        ok:true,
        msg:"Login usuarios /"
    })
});

// validar y revalidar token
router.get('/renew',(req,res)=>{
    return res.json({
        ok:true,
        msg:"Validar revalidar token /renew"
    })
})




module.exports= router;