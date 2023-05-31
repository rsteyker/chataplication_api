//importamos el check de express-validator
const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createUsersValidator = [
  check("username", "Error con el campo username")
    .exists()
    .withMessage("El campo username es obligatorio")
    .notEmpty()
    .withMessage("Username no debe estar vacío")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ min: "5", max: "40" })
    .withMessage("El username debe tener mínimo 5 caracteres máximo 40"),

  check("email", "Error con el campo email ")
    .exists()
    .withMessage("El campo email es obligatorio")
    .notEmpty()
    .withMessage("El email no debe estar vacío")
    .isString()
    .withMessage("El tipo de dato debe de ser string")
    .isEmail()
    .withMessage("El campo email no tiene el formato de correo")
    .isLength({ min: "10", max: "60" })
    .withMessage("El email debe de tener mínimo 10 caracteres y máximo 60 "),

  check("password", "Error con el campo password ")
    .exists()
    .withMessage("El campo password es obligatorio")
    .notEmpty()
    .withMessage("El password no debe estar vacío")
    .isString()
    .withMessage("El tipo de dato debe de ser string")
    .isLength({ min: "8" })
    .withMessage("El password debe de tener mínimo 8 caracteres"),
  validateResult,
];

const loginUsersValidator = [
  check("email", "Error en el campo email")
    .exists()
    .withMessage("El campo email es obligatorio")
    .notEmpty()
    .withMessage("E email no debe de estar vacío")
    .isString()
    .withMessage("El tipo de dato debe de ser string")
    .isEmail()
    .withMessage("No tiene el formato de correo")
    .isLength({ min: "10", max: "60" })
    .withMessage("El email debe de tener mínimo 10 caracteres y máximo 60"),

  check("password", "Error en el campo password")
    .exists()
    .withMessage("Error en el campo password")
    .notEmpty()
    .withMessage("El password no debe de estar vacío")
    .isString()
    .withMessage("El tipo de dato debe de ser string")
    .isLength({ min: "8" })
    .withMessage("El password debe de tener mínimo 8 caracteres "),
  validateResult,
];

module.exports = {
  createUsersValidator,
  loginUsersValidator,
};
