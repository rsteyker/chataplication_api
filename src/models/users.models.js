const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(40),
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(60),
      unique: true,
      validate: {
        isEmail: true,
      },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING(30),
    },
    lastname: {
      type: DataTypes.STRING(30),
    },
    rolId: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      field: "rol_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Users;
