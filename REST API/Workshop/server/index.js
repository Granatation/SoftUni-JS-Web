const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'It works' });
});

app.listen(3030, () => console.log('REST service listening on port 3030'));