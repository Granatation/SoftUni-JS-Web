const router = require('express').Router();
const authService = require('../services/authService');
const { sessionName } = require('../config/constants');
const { isEmail } = require('../utils/validators');

router.get('/register', (req, res) => {
    res.render('auth/registerPage')
});

router.post('/register', async(req, res, next) => {

    if (!isEmail(req.body.username)) {
        // return res.status(404).send('Invalid email');
        // next({ message: 'Invalid email' })
    }
    try {
        await authService.register(req.body);

        res.redirect('login')
    } catch (error) {
        res.status(401).render('auth/registerPage', { error: error.message })
    }

});

router.get('/login', (req, res) => {
    res.render('auth/loginPage')
});

router.post('/login', async(req, res) => {
    try {
        let token = await authService.login(req.body);

        if (!token) {
            return res.redirect('/404');
        }

        res.cookie(sessionName, token, { httpOnly: true });

        res.redirect('/');
    } catch (error) {
        res.render('auth/loginPage', { error: error.message })

    }


});

router.get('/logout', (req, res) => {
    res.clearCookie(sessionName);

    res.redirect('/');
});

module.exports = router;