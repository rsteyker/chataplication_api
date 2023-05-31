const conversationsRoutes = require("../routes/conversations.routes");
const userRoutes = require("../routes/users.routes");
const typesRoutes = require("./types.routes");
const messagesRoutes = require("../routes/messages.routes");

//recibe como parámetro una instancia de express
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(conversationsRoutes);
  app.use(typesRoutes);
  app.use(messagesRoutes);
};

module.exports = apiRoutes;
