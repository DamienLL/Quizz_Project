const { Model, DataTypes } = require('sequelize');

const getConnexion = require('../db/sequelizeConnexion');

class Quiz extends Model {}

Quiz.init(
    {
        title: DataTypes.TEXT,
        description: DataTypes.TEXT,
        user_id: DataTypes.INTEGER,
    },
    {
        sequelize: getConnexion(),
        tableName: 'quiz',
        modelName: 'Quiz',
    }
);

module.exports = Quiz;
