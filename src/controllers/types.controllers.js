const Types = require("../models/types.models");

const findAllTypes = async (req, res, next) => {
  try {
    const types = await Types.findAll();
    res.json(types);
  } catch (error) {
    next(error);
  }
};

const cretaeTypes = async (req, res, next) => {
  try {
    const { name } = req.body;
    await Types.create({ name });
    res.json({
      message: "Tipo creado exitosamente",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAllTypes,
  cretaeTypes,
};
