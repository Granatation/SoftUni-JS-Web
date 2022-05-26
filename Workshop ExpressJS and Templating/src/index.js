const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const port = 5000;

app.use('/static', express.static('Workshop ExpressJS and Templating/public'));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './Workshop ExpressJS and Templating/src/views')

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(port, () => `Server listening on port ${port}!`);