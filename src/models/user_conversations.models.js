const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const User_conversation = db.define('users_conversation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    conversationId: {
        type: DataTypes.INTEGER,
        field: 'conversation_id',
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
    }
},{
    timestamps: false,
});


module.exports = User_conversation;