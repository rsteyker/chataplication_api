const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false,
    },
    typeId: {
        type: DataTypes.INTEGER,
        field: 'type_id',
        allowNull: false,
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
});


module.exports = Conversations;