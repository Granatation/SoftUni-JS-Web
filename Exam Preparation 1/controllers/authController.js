const router = require('express').Router();

const authService = require('../services/authService');
const { COOKIE_SESSION_NAME } = require('../config/constants');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async(req, res) => {
    const { username, password } = req.body;

    const user = await authService.login(username, password)
    const token = await authService.createToken(user)

    res.cookie(COOKIE_SESSION_NAME, token);
    res.redirect('/')
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async(req, res) => {
    const { username, password, repassword, address } = req.body;

    if (password !== repassword) {
        return res.render('auth/register', { error: 'Password missmatch!' })
    }
    try {
        const createdUser = await authService.create({ username, password, address })
        const token = await authService.createToken(createdUser)

        res.cookie(COOKIE_SESSION_NAME, token);
        res.redirect('/login');
    } catch (error) {
        return res.render('auth/register', { error: 'db error!' })
    }

});

module.exports = router;