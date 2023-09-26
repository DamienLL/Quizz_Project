const client = require('../db/connexion');
const CoreModel = require('./coremodel');

class User extends CoreModel {
    firstname;
    lastname;
    email;
    #password;

    /**
     *
     * @param {object} obj
     */
    constructor(obj) {
        super(obj);
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.email = obj.email;
        this.#password = obj.password;
    }

    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }

    static async findAll() {
        const { rows: rawUsers } = await client.query('SELECT * FROM "user";');

        return rawUsers.map((user) => new this(user));
    }

    // qui trouve un User en fonction de son ID.
    /**
     *
     * @param {INTEGER} id
     * @returns object|null
     */
    static async findById(id) {
        const result = await client.query(
            'SELECT * FROM "user" WHERE id = $1;',
            [id]
        );

        if (result.rowCount) {
            return new this(result.rows[0]);
        }

        return null;
    }

    // Qui insert l'instance courante dans la base de données.
    // Br
    static async insert(userObj) {
        const query = `INSERT INTO "user" ("firstname", "lastname", "email", "password")
                         VALUES ($1, $2, $3, $4) RETURNING *`;

        const values = [
            userObj.firstname,
            userObj.lastname,
            userObj.email,
            userObj.password,
        ];

        const result = await client.query(query, values);

        if (result.rowCount) {
            return new this(result.rows[0]);
        }

        return null;
    }

    // qui met à jour l'instance courante dans la base de données.
    // * quand on veut mettre à jour, oj doit avoir des infos à mettre à jour : si j'ai les infos d'un user, c'est que j'ai déjà une instance de user
    async update() {
        const query = `
                    UPDATE "user"
                    SET
                        firstname = $1,
                        lastname = $2,
                        email = $3,
                        password = $4
                    WHERE id = $5 RETURNING *
                    `;

        const values = [
            this.firstname,
            this.lastname,
            this.email,
            this.#password,
            this.id,
        ];

        const result = await client.query(query, values);

        console.log(result);

        if (result.rowCount) {
            return result.rows[0];
        }

        return null;
    }

    // qui supprime l'instance courante de la base de données.
    // * on veut supprimer un élément : c'est donc que m'on a déjà identifié cet élément : pas static
    async destroy() {
        const result = await client.query(
            `DELETE FROM "user" WHERE id = $1 RETURNING *`,
            [this.id]
        );
    }
}

module.exports = User;
