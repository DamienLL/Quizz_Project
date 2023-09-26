//  * CMC  "Ce mot est un emprunt lexical à nos amis les Anglais : a quiz, un questionnaire. De ce fait, on écrit "quiz" comme dans la langue d'origine ! En ce qui concerne le pluriel, on part du principe qu'en français, les noms qui se terminent par "z" sont invariables. En résumé, on écrit un quiz et des quiz."
const CoreModel = require('./coremodel');

class Quiz extends CoreModel {
    title;
    description;
    user_id; // auteur

    /**
     *
     * @param {object} obj
     */
    constructor(obj) {
        super(obj);
        this.title = obj.title;
        this.description = obj.description;
        this.user_id = obj.user_id;
    }
}

module.exports = Quiz;
