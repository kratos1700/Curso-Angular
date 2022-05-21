const {Router} = require('express');
const { crearUsuario, login, renovarToken } = require('../controllers/auth.controller');

const router= Router();

// crear un nuevo usuario
router.post('/new',crearUsuario);


// Login usuario
router.post('/',login);

// validar y revalidar token
router.get('/renew',renovarToken)




module.exports= router;