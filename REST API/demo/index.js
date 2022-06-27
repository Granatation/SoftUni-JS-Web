const express = require('express');

const data = [{
        id: 1111,
        nem: 'First'
    },
    {
        id: 1112,
        nem: 'Second'
    },
    {
        id: 1113,
        nem: 'Third'
    },
];

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json(data);
});

app.get('/catalog/:id', (req, res) => {
    const id = req.params.id;
    const item = data.find(x => x.id == id);

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: 'Not found' });
    }
});

app.post('/catalog', (req, res) => {
    const item = req.body;
    item.id = 1000 + (Math.random() * 8999 | 0);

    data.push(item);

    res.status(201).json(item);
});

app.put('/catalog/:id', (req, res) => {
    const id = req.params.id;
    const index = data.findIndex(x => x.id == id);

    if (index != -1) {
        data.splice(index, 1, req.body);
        res.json(req.body);
    } else {
        res.status(404).json({ error: 'Not found' });
    }
});

app.delete('/catalog/:id', (req, res) => {
    const id = req.params.id;
    const index = data.findIndex(x => x.id == id);

    if (index != -1) {
        data.splice(index, 1);
    } else {
        res.status(404).json({ error: 'Not found' });
    }
});

app.listen(3000, () => console.log(`App listening on port 3000`));