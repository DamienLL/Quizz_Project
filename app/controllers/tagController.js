const { Tag } = require('../models');

const tagController = {
    async index(req, res) {
        try {
            const tags = await Tag.findAll({
                include: 'quizzes',
            });

            res.render('tags', { tags });
        } catch (error) {
            console.log(error.message);
        }
    },
};

module.exports = tagController;
