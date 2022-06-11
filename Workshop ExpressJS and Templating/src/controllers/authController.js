const router = require('express').Router();
const authService = require('../services/authService');

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
    const isValid = await authService.login(req.body);

    if (isValid) {
        res.redirect('/');
    } else {
        res.redirect('/404');
    }
});

module.exports = router;