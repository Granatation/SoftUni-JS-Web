const router = require('express').Router();
const authService = require('../services/authService');
const { sessionName } = require('../config/constants');

router.get('/register', (req, res) => {
    res.render('auth/registerPage')
});

router.post('/register', (req, res) => {
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

module.exports = router;