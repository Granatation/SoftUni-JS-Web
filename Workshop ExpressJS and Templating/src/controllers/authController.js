const router = require('express').Router();
const authService = require('../services/authService');
const { sessionName } = require('../config/constants');
const { isEmail } = require('../utils/validators');

router.get('/register', (req, res) => {
    res.render('auth/registerPage')
});

router.post('/register', (req, res) => {

    if (!isEmail(req.body.username)) {
        return res.status(404).send('Invalid email');
    }
    const createdUser = authService.register(req.body);

    if (createdUser) {
        res.redirect('login')
    } else {
        res.redirect('/404')
    }

});

router.get('/login', (req, res) => {
    res.render('auth/loginPage')
});

router.post('/login', async(req, res) => {
    let token = await authService.login(req.body);

    if (!token) {
        return res.redirect('/404');
    }

    res.cookie(sessionName, token, { httpOnly: true });

    res.redirect('/');

});

router.get('/logout', (req, res) => {
    res.clearCookie(sessionName);

    res.redirect('/');
});

module.exports = router;