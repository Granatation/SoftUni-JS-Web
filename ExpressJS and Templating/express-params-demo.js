const express = require('express');

const app = express();

const cats = [];

app.get('/cats/:catName', (req, res) => {
    cats.push(req.params.catName);
    res.send(req.params.catName);
});

app.get('/cats/:catId(\\d+)', (req, res) => {
    let catId = Number(req.params.catId);
    res.send(cats[catId]);
});


app.listen(3000, () => console.log('ok'));