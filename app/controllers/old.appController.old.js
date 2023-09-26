const User = require('../models/user');

const appController = {
    async index(req, res) {
        try {
            // On simule l'arrivée de données par l'intermédiaire d'un formulaire
            const user = {
                firstname: 'Laurent',
                lastname: 'oclock',
                email: 'laurent@oclock.io',
                password: 'pojdefgpk,nddrogkndsrg',
            };

            const o_user = await User.insert(user);

            o_user.firstname = 'Mickey';

            await o_user.update();

            await o_user.destroy();

            if (user) {
                return res.render('home', { user });
            }

            return res.status(404).render('404');
        } catch (error) {
            console.log(error.message);
            console.log(error.stack);
            res.status(500).send('Un erreur');
        }
    },
};

module.exports = appController;
