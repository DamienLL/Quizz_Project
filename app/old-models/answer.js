const CoreModel = require('./coremodel');

class Answer extends CoreModel {
    description;
    question_id;

    /**
     *
     * @param {object} obj
     */
    constructor(obj) {
        // * super : on initialise le constructeur de la classe parente
        super(obj);

        this.description = obj.description;
        this.question_id = obj.question_id;
    }
}

module.exports = Answer;
