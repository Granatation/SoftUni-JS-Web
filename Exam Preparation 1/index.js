const express = require('express');
const hbs = require('express-handlebars')

const { PORT } = require('./config/env.js');
const { router } = require('./router.js');

const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))