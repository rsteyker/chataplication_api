const Users = require("../models/users.models");
const Conversation = require("../models/conversatios.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Crea usuario
const createUsers = async (req, res, next) => {
  try {
    //Validamos la información
    const { username, email, password } = req.body;

    //Hasheamos la contraseña
    const hashed = await bcrypt.hash(password, 10);

    await Users.create({ username, email, password: hashed });
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

//Validación de login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //validar que el campo email exista y sea string
    //existe el usuario con email
    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      return next({
        status: 400,
        name: "Email inválido",
        message: "El email no existe",
      });
    }

    //Comparar las contraseñas
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return next({
        status: 400,
        name: "Tu contraseña es incorrecta",
        message: "El password no coincide con el email del usuario",
      });
    }

    //Hacer copia de la instancia
    const { firstname, lastname, id, username, rolId } = user;

    //Si todo sale bien
    //Debemos devolver un token para que el usuario logueado
    //pueda acceder a los recursos de back.
    //Generar token
    const userData = { firstname, lastname, id, username, email, rolId };

    const token = jwt.sign(userData, "bienvenidoaqui", {
      algorithm: "HS512",
      expiresIn: "5m",
    });

    //Agregar el token al userData
    userData.token = token;

    res.json(userData);
  } catch (error) {
    next(error);
  }
};

//obtener a todos los usuarios de la aplicación
const findAllUsers = async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

//eliminar una conversación
const deleteConversation = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    //elimina la conversación
    await Conversation.destroy({ where: { id: userId } });

    res.json({
      message: "Usuario y sus conversaciones eliminados exitosamente",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUsers,
  login,
  findAllUsers,
  deleteConversation,
};
