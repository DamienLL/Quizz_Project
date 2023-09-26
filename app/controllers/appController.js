const { User, Tag, Question, Level, Answer, Quiz } = require('../models');

const appController = {
    async index(req, res) {
        try {
            // * Requête simple : uniquement les levels
            // let levels = await Level.findAll();
            // // * Requête complexe : les levels avec leur question
            // levels = await Level.findAll({
            //     include: 'questions',
            // });
            // // console.log(levels);
            // //
            // const level = await Level.findByPk(1, {
            //     include: 'questions',
            // });
            // //console.log(level.questions);

            // const question = await Question.findByPk(1, {
            //     include: 'level',
            // });

            // console.log(question.level);

            const question = await Question.findByPk(1, {
                // ! on peut encore aller plus loin :)
                include: ['answers', 'quiz'],
            });

            // * exos : Tenter de modifier la requête pour limiter le nombre de quiz retourner
            const quiz = await Quiz.findAndCountAll({
                include: ['questions'],
                limit: 2,
            });
            console.log(quiz);
            // const quiz = await Quiz.findAndCountAll({
            //     include: ['questions', 'author'],
            // });

            const user = await User.findOne({
                where: { email: 'chuck@oclock.io' },
            });

            const quizzes = await Quiz.findAll({
                include: ['tags', 'author'],
            });

            const tags = await Tag.findAll({
                include: 'quizzes',
            });

            for (let quiz of quizzes) {
                console.log(quiz.author.fullName);
                // quiz.tags.forEach((tag) =>
                //     console.log(`${quiz.title} est associé à ${tag.name}`)
                // );
            }

            // for (let tag of tags) {
            //     console.log(tag);
            //     tag.quizzes.forEach((quiz) =>
            //         console.log(`${tag.name} est associé à ${quiz.title}`)
            //     );
            // }

            const level = {
                name: 'super ultra',
            };

            // await Level.create(level);

            // const levelToupdate = await Level.findOne({
            //     where: { name: 'super ultra' },
            // });

            // levelToupdate.name = 'Ultra difficile';

            // await levelToupdate.save();

            // * Dépannage pour créer des éléments associés sans avoir à gérer de clés étrangères à la main
            // * Un méthode magique que Sequelize nous offre pour créer des lignes en BDD avec des modèles associés
            const answer = {
                description: 'une autre réponse',
            };

            const newAnswer = await Answer.create(answer);

            const newQuestion = await Question.findByPk(1);

            // * Le addAnswer provient de l'analyse des associations et des modèles, et elle est créée à la volée : c'est de la méta-programmation
            await newQuestion.addAnswer(newAnswer);

            return res.render('home');
        } catch (error) {
            console.log(error.message);
            console.log(error.stack);
            return res.status(500).send('Un erreur');
        }
    },

    // async indexOld(req, res) {
    //     try {
    //         // * On dit a sequelize de re-créer une table
    //         // * force true va effacer la table à coup sur
    //         // * si la table existe elle ne sera pas re-créer si on ne force pas
    //         await Tag.sync({ force: true });

    //         let tag = {
    //             name: 'one more new tag',
    //         };

    //         // * On créé un tag
    //         await Tag.create(tag);
    //         // * On sélectionne un tag
    //         // * find By Primary Key
    //         tag = await Tag.findByPk(1);

    //         // *  à méditer :)
    //         tag = await Tag.findOne({
    //             where: { name: 'one more new tag' },
    //         });

    //         console.log(tag.dataValues);

    //         //            const tags = await Tag.findAll();

    //         // if (tags) {
    //         //     return res.render('home', { tags });
    //         // }

    //         return res.render('home');
    //     } catch (error) {
    //         console.log(error.message);
    //         console.log(error.stack);
    //         return res.status(500).send('Un erreur');
    //     }
    // },
};

module.exports = appController;
