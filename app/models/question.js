const { Model, DataTypes } = require('sequelize');

const getConnexion = require('../db/sequelizeConnexion');

class Question extends Model {}

Question.init(
    {
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        wiki: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        anecdote: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        level_id: DataTypes.INTEGER,
        quiz_id: DataTypes.INTEGER,
        answer_id: DataTypes.INTEGER,
    },
    {
        sequelize: getConnexion(),
        tableName: 'question',
        modelName: 'Question',
    }
);

module.exports = Question;
