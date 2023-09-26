class CoreModel {
    // * la propriété Id est maintenant privée
    #id;
    created_at;
    updated_at;

    /**
     *
     * @param {object} obj
     */
    constructor(obj) {
        if (typeof obj.id !== 'number') {
            // on "lève" une erreur => ça arrête tout !
            throw new Error('id must be a number !');
        }

        this.#id = obj.id;

        // if (typeof obj.created_at !== 'string') {
        //     throw new Error('created_at must be a string !');
        //     // on "lève" une erreur => ça arrête tout !
        // }
        this.created_at = obj.created_at;

        // if (typeof obj.updated_at !== 'string') {
        //     throw new Error('updated_at must be a string !');
        //     // on "lève" une erreur => ça arrête tout !
        // }
        this.updated_at = obj.updated_at;
    }

    /**
     * accesseur : permet de lire un propriété privée
     */
    get id() {
        return this.#id;
    }

    /**
     * mutateur : permet de modifier une propriété
     */
    set id(newId) {
        this.#id = newId;
    }
}

module.exports = CoreModel;
