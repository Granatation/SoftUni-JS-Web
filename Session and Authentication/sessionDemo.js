const express = require('express');

const app = express();

const session = require('express-session');

app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get('/', (req, res) => {
    res.send('some text');
});

app.get('/cats', (req, res) => {
    req.session.message = 'something';
    res.send('Session cat');
});

app.get('/getSession', (req, res) => {
    res.json(req.session);
});

app.listen(5000, () => console.log('Server listening on port 5000'))