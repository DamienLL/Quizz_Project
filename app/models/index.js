const User = require('./user');
const Question = require('./question');
const Answer = require('./answer');
const Quiz = require('./quiz');
const Level = require('./level');
const Tag = require('./tag');

// * Les associations entre chaque modèle : les cardinalités version JS
// one to one ?
// one to many ?
// many to many ?

// * Level et Question
Level.hasMany(Question, {
    foreignKey: 'level_id',
    as: 'questions',
});
// * Question et Level
Question.belongsTo(Level, {
    foreignKey: 'level_id',
    as: 'level',
});

// Question et Answer
Question.hasMany(Answer, {
    // One to Many (toutes les propositions de réponse)
    foreignKey: 'question_id',
    as: 'answers',
});

Answer.belongsTo(Question, {
    // One to Many réciproque (toutes les propositions de réponse)
    foreignKey: 'question_id',
    as: 'question',
});

// * La bonne réponse :
// Question et Answer
// * belongsTo sont des associations ou la clé étrangère pour l'association one-to-one existe sur le modèle source
// * hasOne sont des associations ou la clé étrangère pour l'association one-to-one existe sur le modèle cible
Question.belongsTo(Answer, {
    foreignKey: 'answer_id',
    as: 'good_answer',
});

// * Quiz et Question
Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
    as: 'questions',
});

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    as: 'quiz',
});

// * Quiz et User
User.hasMany(Quiz, {
    foreignKey: 'user_id',
    as: 'quizzes',
});

Quiz.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'author',
});

// * Quizz et Categorie
Quiz.belongsToMany(Tag, {
    as: 'tags',
    through: 'quiz_has_tag',
    foreignKey: 'quiz_id',
    otherKey: 'tag_id',
});

Tag.belongsToMany(Quiz, {
    as: 'quizzes',
    through: 'quiz_has_tag',
    foreignKey: 'tag_id',
    otherKey: 'quiz_id',
});

module.exports = { User, Question, Answer, Quiz, Level, Tag };
