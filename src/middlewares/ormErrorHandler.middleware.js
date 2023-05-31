const {
  ValidationError,
  DatabaseError,
  ConnectionAcquireTimeoutError,
  ConnectionError,
  ConnectionRefusedError,
  ConnectionTimedOutError,
  InvalidConnectionError,
} = require("sequelize");

const ormErrorHandler = (err, req, res, next) => {
  if (
    err instanceof ConnectionError ||
    err instanceof ConnectionAcquireTimeoutError ||
    err instanceof ConnectionRefusedError ||
    err instanceof ConnectionTimedOutError ||
    err instanceof InvalidConnectionError
  ) {
    return res.status(409).json({
      name: err.name,
      messge: "Error en la conexión  de la base de datos",
    });
  }

  if (err instanceof ValidationError) {
    return res.status(400).json({
      name: err.name,
      message: err.message,
      errors: err.errors,
    });
  }

  if (err instanceof DatabaseError) {
    return res.status(409).json({
      name: err.name,
      message: err.message,
      errors: err.errors,
    });
  }
  next(err);
};

module.exports = ormErrorHandler;
