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
