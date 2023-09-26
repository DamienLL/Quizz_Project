const CoreModel = require('./coremodel');
const client = require('../db/connexion');

class Tag extends CoreModel {
    name;
    /**
     *
     * @param {object} obj
     */
    constructor(obj) {
        super(obj);
        this.name = obj.name;
    }

    // * Une méthode static est une méthode que l'on peut appeler directement avec le nom de la classe, sans avoir besoin de l'instancier
    static async findAll() {
        // *Object destructuring : on va chercehr rows dans le résultat de la requête, et on le renomme rawTags
        const { rows: rawTags } = await client.query('SELECT * FROM "tag";');

        // * Map retourne un nouveau tableau à partir du tableau rawTags, il instancie chaque élément de ce tableau, et retourne un tableau composé d'instance de la classe Tag
        return rawTags.map((tag) => new this(tag));
    }
}

module.exports = Tag;
