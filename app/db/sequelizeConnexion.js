// require('dotenv').config();
const Sequelize = require('sequelize');

/**
 * * Cette fonction va retourner une instance de sequelize qui permettra aux modèles sequelize de se connecter à la BDD
 *  */
function getConnexion() {
    // * Laurent : quand on met en commentaire qu'une fonction retourne qqchose, oublies pas de retourner ce qqchose
    return new Sequelize(process.env.PG_URL, {
        // * Le dialect est le type de BDD que l'on utilise
        // * Cette propriété permet à sequelize de tenir compte des différences éventuelles de syntaxe entre les SGBD
        // * Cette propriété dialect est obligatoire depuis sequelize v4
        dialect: process.env.DIALECT,
        define: {
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
        logging: false, // Annuler le console.log des requêtes SQL
    });

    // try {
    //     await sequelize.authenticate();
    //     console.log('Connection has been established successfully.');
    // } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    // }
}

// getConnexion();

module.exports = getConnexion;
