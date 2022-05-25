const express = require('express');
const fs = require('fs');
const { catMiddleware } = require('./middlewares');
const handlebars = require('express-handlebars');

const app = express();

const port = 5000;

const users = [
    { name: 'Pesho', age: 20 },
    { name: 'Gosho', age: 21 },
    { name: 'Niko', age: 17 }
];

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.use('/img', express.static('img'));

app.get('/:name?', catMiddleware, (req, res) => {
    //Does the same
    // res.write('Hello');
    // res.end();

    // res.status(200);
    // res.send('Hello world!');

    res.render('home', {
        name: req.params.name || 'guest',
        users,
        isAuth: false
    });
});

app.post('/', (req, res) => {
    res.status(200);
    res.send('Post request to the home page');
});

app.get('/cats', catMiddleware, (req, res) => {
    if (req.cats.length > 0) {
        res.send(req.cats.join(', '));
    } else {
        res.send('No cats in here!');
    }
});

app.post('/cats/:catName', catMiddleware, (req, res) => {
    req.cats.push(req.params.catName);

    res.status(201);
    res.send(`Add ${req.params.catName} to the collection`);
});

app.get('/cats/:catId(\\d+)', catMiddleware, (req, res) => {
    let catId = Number(req.params.catId);
    res.send(req.cats[catId]);
});

app.get('/cat*', (req, res) => {
    res.status(200);
    res.send('Every path starting with cat');
});

app.get('/download', (req, res) => {
    res.writeHead(200, {
        'content-type': 'application/pdf',
        'content-disposition': 'inline' // 'attachment'
    });

    const readStream = fs.createReadStream('balkan_74_68_ticha.pdf');

    readStream.pipe(res);

    //Does the same
    res.download('balkan_74_68_ticha.pdf');
});

app.get('/redirect', (req, res) => {
    res.writeHead(302, {
        'Location': '/cats'
    });

    res.end();

    //Does the same
    res.redirect('/cats');
});

app.get('*', (req, res) => {
    res.status(200);
    res.send('Page not found');
});



app.listen(port, () => console.log(`Express running on port ${port}`));
