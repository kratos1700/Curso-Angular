const { response } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require('bcryptjs');
const { generarJWT } = require("../helpers/jwt");

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
    const salt= bcrypt.genSaltSync();
    dbUser.password= bcrypt.hashSync(password, salt)

    // general JWT
    const token = await generarJWT(dbUser.id, dbUser.nombre)


    // crea usuario a la bbdd
    await dbUser.save();
    // generar respuesta ok
    return res.status(201).json({
      ok: true,
      msg: "Usuario creado",
      uid: dbUser.id,
      nombre,
      token
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: "Hable con el admin",
    });
  }
};

const login = (req, res = response) => {
  const { email, password } = req.body;
  console.log(email, password);
  return res.json({
    ok: true,
    msg: "Login usuarios /",
  });
};

const renovarToken = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "Validar revalidar token /renew",
  });
};

module.exports = {
  crearUsuario,
  login,
  renovarToken,
};
