const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, login, renovarToken } = require('../controllers/auth.controller');
const { validarCampos } = require('../middleware/validar-campos');

const router= Router();

// crear un nuevo usuario
router.post('/new',[
    check('nombre', 'El nombre es obligatorio').notEmpty().isLength({min:5}),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El passord es obligatorio').isLength({min:6}),
    validarCampos 
],
crearUsuario);


// Login usuario
router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El passord es obligatorio').isLength({min:6}),
    validarCampos 
],login);

// validar y revalidar token
router.get('/renew',renovarToken)




module.exports= router;