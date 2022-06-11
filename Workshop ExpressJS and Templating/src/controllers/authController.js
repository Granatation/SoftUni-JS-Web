const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {
    res.render('auth/registerPage')
});

router.post('/register', async(req, res) => {
    const createdUser = await authService.register(req.body);

    if (createdUser) {
        res.redirect('auth/loginPage')
    } else {
        res.redirect('404')
    }

});

module.exports = router;