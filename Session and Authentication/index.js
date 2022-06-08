const express = require('express');
const hbs = require('express-handlebars');
const bcrypt = require('bcrypt');

const app = express();

const userSessions = {};
const saltRounds = 10;

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'Session and Authentication/views');
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('Session and Authentication/public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async(req, res) => {
    const { email, password } = req.body;

    if (userSessions[email]) {
        res.status(400).send('User already exists')
    }

    const hash = await bcrypt.hash(password, saltRounds);
    userSessions[email] = {
        email,
        password: hash
    }

    res.redirect('/login')
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async(req, res) => {
    const { email, password } = req.body;

    const isAuthenticated = await bcrypt.compare(password, userSessions[email].password);

    if (isAuthenticated) {
        res.redirect('/');
    } else {
        res.status(401).send('Wrong email or password');
    }

});

app.listen(5000, () => console.log('Server listening on port 5000'))