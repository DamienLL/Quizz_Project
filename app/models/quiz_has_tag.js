const { Model, DataTypes } = require('sequelize');

const getConnexion = require('../db/sequelizeConnexion');

class QuizHasTag extends Model {}

QuizHasTag.init(
    {
        tag_id: DataTypes.INTEGER,
        quiz_id: DataTypes.INTEGER,
    },
    {
        sequelize: getConnexion(),
        tableName: 'quiz_has_tag',
        modelName: 'QuizHasTag',
    }
);

module.exports = QuizHasTag;
