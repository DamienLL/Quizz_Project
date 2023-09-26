const { Router } = require('express');
const router = Router();
const mainController = require('./controllers/mainController.js');
const quizController = require('./controllers/quizController.js');
const tagController = require('./controllers/tagController.js');
const authController = require('./controllers/authController.js');
const userController = require('./controllers/userController.js');

/**
 * * Import des middlewares de vérification user et admin
 */
const { isLoggedIn, isAdmin } = require('../middlewares/isLoggedIn.js');

router.get('/', mainController.index);

router.get('/quiz/:id', isLoggedIn, quizController.show);

router.get('/tags', tagController.index);

// auth
router.get('/register', authController.register);
router.post('/register', authController.createUser);

router.get('/login', authController.login);
router.post('/login', authController.createSession);

router.get('/logout', authController.destroy);

router.get('/profile', [isLoggedIn, isAdmin], userController.index);

router.use((req, res, next) => {
    res.status(404).render('404');
});

module.exports = router;
