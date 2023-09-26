// * Model est le CoreModel de sequelize
const { Model, DataTypes, literal } = require('sequelize');
// * si on voulait ..
// * placer les parenthèses immédiatement après l'import de la fonction, permet de l'exécuter dsans la foulée et d'obtenir sa valeur de retour dans la variable sequelize
// const sequelize = require('../db/sequelizeConnexion')();
const getConnexion = require('../db/sequelizeConnexion');

class Tag extends Model {}

// * Le premier objet sert à la définition de notre modèle (mapping) : on retrouve les attributs identifiés lors du MCD
//
// * Le deuxième objet est un objet de configuration, on petu spécifier des options dans cet objet et surtout c'est ici qu'on dit à sequelize comment se connecter à la BDD
Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        // * On doit obligatoirement mettre une instance de sequelize capable de se connecter à la BDD
        sequelize: getConnexion(),
        // * La propriété suivante indique à sequelize le nom de la table sur laquelle faire les requêtes
        // * Si on ne précise pas le nom de la table, sequelize va aller chercher une table qui porte le nom du modèle au pluriel et en minuscule
        tableName: 'tag',
        modelName: 'Tag',
    }
);

module.exports = Tag;
