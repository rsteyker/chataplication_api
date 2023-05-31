const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Messages = db.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.TEXT
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false,
    },
    conversationId: {
        type: DataTypes.INTEGER,
        field: 'conversation_id',
        allowNull: false,
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
});


module.exports = Messages;