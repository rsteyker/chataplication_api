const logError = require("../middlewares/logError.middleware");
const ormErrorHandler = require("../middlewares/ormErrorHandler.middleware");
const errorHandler = require("../middlewares/errorHandler.middleware");

const errorRoutes = (app) => {
  app.use(logError); // mostramos el error
  app.use(ormErrorHandler); //si es error de orm actjuamos y respondemos, next
  app.use(errorHandler);

  //manejar el error 404
  app.use("*", (req, res) => {
    res.status(404).json({
      message: "EL backend se encuentra trabajando, pronto tendremos esta ruta",
    });
  });
};

module.exports = errorRoutes;
