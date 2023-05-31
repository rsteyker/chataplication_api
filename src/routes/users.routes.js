//Importamos router express
const { Router } = require("express");
const {
  createUsers,
  login,
  findAllUsers,
  deleteConversation,
} = require("../controllers/users.controllers");
const {
  createUsersValidator,
  loginUsersValidator,
} = require("../validators/users.validators");

//Inicializamos
const router = Router();

router.post("/users", createUsersValidator, createUsers);

router.post("/users/login", loginUsersValidator, login);

router.get("/users", findAllUsers);

router.delete("/users/:userId", deleteConversation);

module.exports = router;
