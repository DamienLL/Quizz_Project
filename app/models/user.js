const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../db/sequelizeConnexion');

class User extends Model {
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

User.init(
    {
        firstname: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        role: {
            type: DataTypes.TEXT,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'user',
        modelName: 'User',
    }
);

module.exports = User;
