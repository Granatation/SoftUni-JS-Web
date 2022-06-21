const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const { PORT } = require('./config/env.js');
const routes = require('./routes');
const { dbInit } = require('./config/db');
const { auth } = require('./middlewares/authMiddleware');
const { errorHandler } = require('./middlewares/errorHandlerMiddleware.js');

const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './Exam Preparation 1/views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('./Exam Preparation 1/public'));
app.use(cookieParser());
app.use(errorHandler);
app.use(auth);
app.use(routes);

dbInit();
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))