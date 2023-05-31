const express = require("express");
const db = require("./utils/database");
require("dotenv").config();
const cors = require("cors");
const initModels = require("./models/initModels");
const apiRoutes = require("./routes");
const errorRoutes = require("./routes/errorsRoutes");

//Ejecutamos el initModels
initModels();

//Creamos la instancia
const app = express();
app.use(cors());

app.use(express.json());
const PORT = process.env.PORT || 8000;

//Ejecutamos el método autheticate
db.sync()
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

//rutas ejecutandose
apiRoutes(app);

//ejecutamos el manejador de errores
errorRoutes(app);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
