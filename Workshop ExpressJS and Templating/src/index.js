const express = require('express');
const handlebars = require('express-handlebars');
const router = require('./routes');

const app = express();
const port = 5000;

app.use('/static', express.static('Workshop ExpressJS and Templating/public'));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './Workshop ExpressJS and Templating/src/views')

app.use(router);

app.listen(port, () => `Server listening on port ${port}!`);