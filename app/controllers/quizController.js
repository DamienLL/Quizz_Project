const { Quiz } = require('../models');

const quizController = {
    async show(req, res) {
        ///        const id = Number(req.params.id);
        const { id } = req.params;
        try {
            const quiz = await Quiz.findByPk(id, {
                include: [
                    { association: 'author' },
                    { association: 'tags' },
                    {
                        association: 'questions',
                        include: ['level', 'answers'],
                    },
                ],
            });

            // const oneQuiz = await Quiz.findByPk(id, {
            //     include: ['tags', 'author', 'questions'],
            // });

            // const infoQuestion = await Question.findAll({
            //     include: ['answers', 'good_answer', 'level'],
            //     where: { quiz_id: id },
            // });

            res.render('quiz', { quiz });
        } catch (error) {
            console.log(error.message);
        }
    },
};

module.exports = quizController;
