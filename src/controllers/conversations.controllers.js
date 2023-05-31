const Conversation = require("../models/conversatios.models");
const User_conversation = require("../models/user_conversations.models");
const Users = require("../models/users.models");
const Messages = require("../models/messages.models");

//crear una nueva conversación en pareja
const createConversationPairs = async (req, res, next) => {
  try {
    const { title, typeId, userId } = req.body;
    // Crear la conversación en la base de datos
    const conversation = await Conversation.create({
      title,
      typeId,
      userId,
    });
    await User_conversation.create({
      conversationId: conversation.id,
      userId,
    });
    // ? como agregas al otro participante

    res.json(conversation);
  } catch (error) {
    next(error);
  }
};

//Obtener todas las conversaciones de un usuario
const getAllConversationUsers = async (req, res, next) => {
  try {
    const { typeId } = req.params;
    const conversations = await Conversation.findAll({
      where: { typeId },
      include: {
        model: Users,
        attributes: {
          exclude: ["id", "email", "password", "firstname", "lastname"],
        },
      },
    });
    res.json(conversations);
  } catch (error) {
    next(error);
  }
};

//obtiene las conversaciones y mensajes del usuario
const getAllConversationMessageUsers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const conversation = await Conversation.findByPk(id, {
      attributes: {
        exclude: ["userId"],
      },
      include: [
        {
          model: Users,
          attributes: {
            exclude: ["id", "email", "password", "firstname", "lastname"],
          },
        },
        {
          model: Messages,
          attributes: {
            exclude: ["userId", "conversationId"],
          },
          include: {
            model: Users,
            attributes: {
              exclude: [
                "id",
                "email",
                "password",
                "firstname",
                "lastname",
                "rolId",
              ],
            },
          },
        },
      ],
    });
    res.json(conversation);
  } catch (error) {
    next(error);
  }
};

//permita crear mensajes en una conversación

module.exports = {
  createConversationPairs,
  getAllConversationUsers,
  getAllConversationMessageUsers,
};
