// jwt
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    //Recuperar el token
    const token = req.headers["access-token"];

    if (!token) {
      return next({
        status: 401,
        name: "No se encuentra el token",
        message: "Token no está presente en el header del solicitud",
      });
    }

    //si el token si existe?
    const decode = jwt.verify(token, "bienvenidoaqui", {
      algorithms: "HS512",
    });

    //el token está expirado
    //token es invalido
    req.user = decode;
    next();
  } catch (error) {
    next({
      status: 498,
      name: "Token expirado o inválido",
      message: error,
    });
  }
};

module.exports = authenticate;
