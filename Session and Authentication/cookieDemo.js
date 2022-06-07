const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('mainCookie', 'something');
    res.send('some text');
});

app.get('/cats', (req, res) => {
    res.cookie('catCookie', 'something else');
    res.send('cats');
});

app.get('/getCookies', (req, res) => {
    res.json(req.cookies)
});

app.listen(5000, () => console.log('Server listening on port 5000'))