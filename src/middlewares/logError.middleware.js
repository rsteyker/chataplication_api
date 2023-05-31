//muestra el error en consola y pasar al sgte
const logError = (err, req, res, next) => {
  console.log(err);
  next(err);
};

module.exports = logError;
