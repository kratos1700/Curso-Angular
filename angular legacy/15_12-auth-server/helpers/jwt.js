const jwt = require("jsonwebtoken");

const generarJWT = (uid, nombre) => {
  const payload = { uid, nombre };

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "24h",
      },
      (err, token) => {
          // si hay error
        if (err) {
          console.log(err);
        } else {
            // si esta todo correcto
            resolve(token)
        }
      }
    );
  });
};

module.exports={
    generarJWT
}