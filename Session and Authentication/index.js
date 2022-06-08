const express = require('express');
const hbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();

const userSessions = {};
const saltRounds = 10;
const secret = 'MySecret';

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'Session and Authentication/views');
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('Session and Authentication/public'));
app.use(cookieParser())

app.get('/', (req, res) => {
    let token = req.cookies['session'];

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                return res.status(401).send('Invalid token');
            }

            res.render('home', { email: decodedToken.email });
        })
    } else {
        res.render('home', { email: "Guest" });
    }
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
        const token = jwt.sign({ email }, secret, { expiresIn: '2d' });

        res.cookie('session', token, { httpOnly: true });

        res.redirect('/');
    } else {
        res.status(401).send('Wrong email or password');
    }

});

app.listen(5000, () => console.log('Server listening on port 5000'))