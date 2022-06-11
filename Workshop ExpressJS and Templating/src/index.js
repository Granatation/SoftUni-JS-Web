const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./routes');
const { initializeDatabase } = require('./config/database');
const { auth } = require('./middlewares/authMiddleware');
const app = express();

const port = 5000;

require('./config/handlebars')(app);

app.use('/static', express.static('Workshop ExpressJS and Templating/public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))
app.use(auth);
app.use(router);

initializeDatabase()
    .then(() => {
        app.listen(port, () => console.log(`Server listening on port ${port}!`));
    })
    .catch(err => {
        console.log(err);
    });