const CoreModel = require('./coremodel');

class QuizHasTag extends CoreModel {
    quiz_id;
    tag_id;

    /**
     *
     * @param {object} obj
     */
    constructor(obj) {
        // * super : on initialise le constructeur de la classe parente
        super(obj);

        this.quiz_id = obj.quiz_id;
        this.tag_id = obj.tag_id;
    }
}

module.exports = QuizHasTag;
