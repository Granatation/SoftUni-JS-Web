const router = require('express').Router();
const authService = require('../services/authService');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/register', async(req, res) => {
    const { username, password } = req.body;

    const user = await authService.login(username, password)
    const token = await authService.createToken(user)


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
        await authService.create({ username, password, address })
        res.redirect('/login')
    } catch (error) {
        return res.render('auth/register', { error: 'db error!' })
    }

});

module.exports = router;