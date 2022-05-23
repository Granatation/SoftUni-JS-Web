const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
    //Does the same
    // res.write('Hello');
    // res.end();

    res.status(200);
    res.send('Hello');
});

app.get('/cats', (req, res) => {
    res.status(200);
    res.send('Cats');
});

app.get('/cat*', (req, res) => {
    res.status(200);
    res.send('Every path starting with cat');
});

app.post('/', (req, res) => {
    res.status(200);
    res.send('Post request to the home page');
});

app.get('*', (req, res) => {
    res.status(200);
    res.send('Page not found');
});

app.listen(port, () => console.log(`Express running on port ${port}`));