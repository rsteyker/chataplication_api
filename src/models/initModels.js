//Importamos los modelos
const Users = require("../models/users.models");
const Roles = require("../models/roles.models");
const Users_conversation = require("../models/user_conversations.models");
const Conversations = require("../models/conversatios.models");
const Messages = require("../models/messages.models");
const Types = require("../models/types.models");

const initModels = () => {
  //Users and Roles
  Users.belongsTo(Roles, { foreignKey: "rolId" });
  Roles.hasMany(Users, { foreignKey: "rolId" });

  //Users and users_conversation
  Users_conversation.belongsTo(Users, { foreignKey: "userId" });
  Users.hasMany(Users_conversation, { foreignKey: "userId" });

  //Users and conversations
  Conversations.belongsTo(Users, { foreignKey: "userId" });
  Users.hasMany(Conversations, { foreignKey: "userId" });

  //Users and Messages
  Messages.belongsTo(Users, { foreignKey: "userId" });
  Users.hasMany(Messages, { foreignKey: "userId" });

  //Users_conversation and Conversations
  Users_conversation.belongsTo(Conversations, {
    foreignKey: "conversationId",
    onDelete: "CASCADE",
  });
  Conversations.hasMany(Users_conversation, {
    foreignKey: "conversationId",
    onDelete: "CASCADE",
  });

  //Conversatios and Messages
  Messages.belongsTo(Conversations, { foreignKey: "conversationId" });
  Conversations.hasMany(Messages, { foreignKey: "conversationId" });

  //Conversations and Types
  Conversations.belongsTo(Types, { foreignKey: "typeId" });
  Types.hasMany(Conversations, { foreignKey: "typeId" });
};

module.exports = initModels;
