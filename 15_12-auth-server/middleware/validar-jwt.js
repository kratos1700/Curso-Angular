const { response } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req, res = response, next) => {
  // leemos el header para recuperar el token
  const token = req.header("x-token");

  if (!token) {
    return res.status(400).json({
      ok: false,
      msg: "Error en el token",
    });
  }

  try {
    // verificamos el JWT
    const { uid, nombre } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    // asignamos a la req los valores del jwt para poder recuperarlos al controlador
    req.uid = uid;
  //  req.nombre = nombre;

  } catch (error) {
    
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }

  //Todo ok
  next();
};

module.exports = {
  validarJWT,
};
