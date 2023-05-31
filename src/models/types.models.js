const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Types = db.define('types', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(30)
    }
}, {
    timestamps: false,
});


module.exports = Types;