const CoreModel = require('./coremodel');

class Question extends CoreModel {
    description;
    anecdote;
    wiki;
    level_id;
    answer_id;
    quiz_id;

    /**
     *
     * @param {object} obj
     */
    constructor(obj) {
        super(obj);

        this.description = obj.description;
        this.anecdote = obj.anecdote;
        this.wiki = obj.wiki;
        this.level_id = obj.level_id;
        this.answer_id = obj.answer_id;
        this.quiz_id = obj.quiz_id;
    }

    get infos() {
        return `
            <p>${this.anecdote}</p>
            <p>${this.wiki}</p>
        `;
    }
}

module.exports = Question;
