const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const validateEmail = require('../../middlewares/validateEmail');

const authController = {
    register(req, res) {
        res.render('signup');
    },
    async createUser(req, res) {
        // ! req.body devrait passer par un middleware, pour valider les champs du formulaire
        const {
            email,
            password,
            firstname,
            lastname,
            confirmation: passwordConfirm,
        } = req.body;

        if (
            !firstname ||
            !lastname ||
            !email ||
            !password ||
            !passwordConfirm
        ) {
            return res.render('signup', {
                error: 'Veuillez remplir tous les champs du formulaire',
            });
        }

        if (password !== passwordConfirm) {
            return res.render('signup', {
                error: 'La confirmation du mot de passe est inexacte',
            });
        }

        // Validation d'email
        // * On vérifie si l'email est formatté correctement on cherche un @ et une extension de nom de domaine
        if (!emailValidator.validate(email)) {
            return res.render('signup', {
                error: "L'email est invalide",
            });
        }

        // if (!validateEmail(email)) {
        //     return res.render('signup', {
        //         error: "L'email est invalide",
        //     });
        // }

        // const name = 'laurent';
        // const user = {
        //     name: name,
        // };
        try {
            const existsUser = await User.findOne({
                where: { email },
            });
            if (existsUser) {
                return res.render('signup', {
                    error: "Une erreur horrible s'est produite",
                });
            }

            // * si on avait le temps on suivrait les recommandations de la cnil
            // * Il faut un mot de passe avec 8 caractères minimum, il faut des minuscules et majuscules ainsi que un ou plusieurs chiffres
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            console.log(salt);
            const encryptedPass = await bcrypt.hash(password, salt);
            console.log(encryptedPass);

            await User.create({
                firstname,
                lastname,
                email,
                role: 'user',
                password: encryptedPass,
            });

            res.redirect('/login?registered=true');
        } catch (error) {
            console.log(error.message);
            res.status(500).send(error.message);
        }
    },

    login(req, res) {
        let registered = false;

        if (req.query.registered) {
            registered = req.query.registered; // true, car queryString lui passe true depuis la méthode register
        }

        res.render('login', { registered });
    },

    async createSession(req, res) {
        //
        const { email, password } = req.body;
        // mosefuda@mailinator.com
        // Pa$$w0rd!

        if (!emailValidator.validate(email)) {
            return res.render('login', {
                error: "L'email est invalide",
            });
        }

        try {
            // * 2. on vérifie si l'utilisateur existe dans la BDD
            const existsUser = await User.findOne({
                where: { email },
                attributes: { exclude: ['created_at', 'updated_at'] },
            });

            if (!existsUser) {
                return res.render('login', {
                    error: "Une erreur horrible s'est produite",
                });
            }

            // * 3. Le mot de passe est-il valide ?

            console.log(existsUser.password);

            // * Comment bcrypt décide si Pa$$w0rd! === $2b$10$xNfOA8DCB2x7QbkhQIAnKe9QQArryoh6fss7WLhnK6guENagGHFRi; ?
            // * SEL : $2b$10$xNfOA8DCB2x7QbkhQIAnKe
            // * HASH du MOT de PASSE : 9QQArryoh6fss7WLhnK6guENagGHFRi
            // *  1. bcrypt va récupérer le sel qui est sur le existsUser.password
            // *  2. bcrypt va chiffrer password (qui vient du formulaire : Pa$$w0rd!)
            // *  3. bcrypt va mettre le SEL qu'il vient de récupérer sur le mot de passe fraichement haché ($2b$10$xNfOA8DCB2x7QbkhQIAnKePa$$w0rd!)
            // *  4. bcrypt va comparer les les deux strings et voir si la précision au niveau du calcul du hash est acceptable
            // *  5. bcrypt va retourner true ou false
            const ok = await bcrypt.compare(password, existsUser.password);

            if (!ok) {
                return res.render('login', {
                    error: "Une chose horrible a envahi le serveur, veuillez ré-essayer plus tard (ps : ce n'est pas de votre faute)",
                });
            }

            // * Si on en est la, c'est que tout est validé, on peut donc démarrer une session utilisateur
            // * On ajoute l'utilisateur à la session

            // delete existsUser.dataValues.password;

            req.session.userId = existsUser.id;

            // res.render('profile', { user: existsUser });

            // Faisons une notification

            res.redirect('/profile');
        } catch (error) {
            console.log(error.message);
        }
    },

    destroy(req, res) {
        req.session.user = null;
        res.locals.user = null;
        req.session.userId = null;

        req.session.destroy();

        res.redirect('/');
    },
};

module.exports = authController;
