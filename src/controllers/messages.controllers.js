const Messages = require("../models/messages.models");

const createMessages = async (req, res, next) => {
  try {
    const newMessage = req.body;
    const message = await Messages.create(newMessage);

    res.json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMessages,
};
