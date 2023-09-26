const { Quiz } = require('../models');

const mainController = {
    async index(req, res) {
        try {
            const quizzes = await Quiz.findAll({
                include: ['author', 'tags'],
            });

            // typeof et instanceof servent à identifier le type de données auxquelles on a à faire

            // const user = {
            //     name: 'Laurent',
            // };
            //const arr = ['fruits', 'fruits'];

            // console.log(typeof test);
            // console.log(test instanceof String);

            // console.log(typeof user);
            // console.log(user instanceof Object);

            // console.log(typeof arr);
            // console.log(arr instanceof Array);

            //for (let quiz of quizzes) {
            //console.log(quizzes);
            //}

            res.render('home', { quizzes });
        } catch (error) {
            console.log(error.message);
        }
    },
};

module.exports = mainController;
