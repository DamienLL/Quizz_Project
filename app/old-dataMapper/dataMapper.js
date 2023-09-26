const client = require('./connexion');
const User = require('../models/user');
const Tag = require('../models/tag');

const dataMapper = {
    async findAllUsers() {
        const result = await client.query('SELECT * FROM "user";');

        const { rows } = result;

        return rows;
    },

    async findUserById(id) {
        // ! SELECT * FROM "user" WHERE id = 1;

        const result = await client.query(
            'SELECT * FROM "user" WHERE id = $1;',
            [id]
        );

        const rawUser = result.rows[0];

        //        console.log(rawUser);

        if (!rawUser) {
            return null;
        }

        return new User(rawUser);
    },

    async findAllTags() {
        // * je vais dans Result chercher rows, et je renomme ce tableau rawTags
        const result = await client.query('SELECT * FROM "tag";');
        console.log(result);

        const { rows: rawTags } = await client.query('SELECT * FROM "tag";');

        return rawTags.map((tag) => new Tag(tag));
    },
};

module.exports = dataMapper;
