const { response } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");

/**
 * 
 * Crear usuario
 */
const crearUsuario = async (req, res = response) => {
  const { email, nombre, password } = req.body;

  try {
    // verificar email
    const usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "el usuario ya existe",
      });
    }

    // crear usuario con el modelo
    const dbUser = new Usuario(req.body);

    // encriptar password
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password, salt);

    // general JWT
    const token = await generarJWT(dbUser.id, dbUser.nombre);

    // crea usuario a la bbdd
    await dbUser.save();
    // generar respuesta ok
    return res.status(201).json({
      ok: true,
      msg: "Usuario creado",
      uid: dbUser.id,
      nombre,
      token,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: "Hable con el admin",
    });
  }
};

/**
 * 
 *Login usuario
 */
const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // buscamos el usuario
    const dbUser = await Usuario.findOne({ email });
    //si no lo tenemos
    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: "El correo no existe",
      });
    }

    // confirmar si el password es el mismo, pasamos el paswors introducido y lo comparamos con el encriptado de la bd
    const validPassword = bcrypt.compareSync(password, dbUser.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "El password no es valido",
      });
    }
    // generamos el JWT
    const token = await generarJWT(dbUser.id, dbUser.nombre);

    return res.json({
      ok: true,
      uid: dbUser.id,
      nombre: dbUser.nombre,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Hable con el admin",
    });
  }
};


/**
 * 
 * Renovar JWT
 */
const renovarToken = async(req, res = response) => {

  // de la req que hemos establecido en el validar jwt extraemos la uid y el nombre
  const{uid}= req;

  // leemos los datos de la bbdd
  const dbUser= await Usuario.findById(uid);

   // generamos el JWT
   const token = await generarJWT(uid, dbUser.nombre);


  return res.json({
    ok: true,
    uid,
    nombre: dbUser.nombre,
    email: dbUser.email,
    token
  });
};

module.exports = {
  crearUsuario,
  login,
  renovarToken,
};
