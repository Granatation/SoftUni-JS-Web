const router = require('express').Router();

const authService = require('../services/authService');
const { COOKIE_SESSION_NAME } = require('../config/constants');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorHelpers')

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login', isGuest, async(req, res) => {
    const { username, password } = req.body;

    if (username == '' || password == '') {
        return res.render('auth/login', { error: 'Empty fields!' })
    }
    const user = await authService.login(username, password)
    const token = await authService.createToken(user)

    res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });
    res.redirect('/')
});

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

router.post('/register', isGuest, async(req, res) => {
    const { username, password, repassword, address } = req.body;

    if (password !== repassword) {
        return res.render('auth/register', { error: 'Password missmatch!' })
    }
    try {
        const createdUser = await authService.create({ username, password, address })
        const token = await authService.createToken(createdUser)

        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });
        res.redirect('/login');
    } catch (error) {
        return res.render('auth/register', { error: getErrorMessage(error) })
    }

});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(COOKIE_SESSION_NAME);
    res.redirect('/');
});

module.exports = router;