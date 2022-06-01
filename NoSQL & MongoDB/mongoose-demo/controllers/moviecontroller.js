const router = require('express').Router();
const { Movie } = require('../models/Movie')

router.get('/', async(req, res) => {
    const movies = await Movie.find().lean();

    res.render('movies', { movies });
});

router.get('/:movieId', async(req, res) => {
    console.log(req.params.movieId);

    let movie = await Movie.findById(req.params.movieId).lean();

    req.render('movieDetails', { movie });
});

router.get('/create', (req, res) => {
    res.render('createMovie');
});

router.post('/create', (req, res) => {
    let savedMovie = await Movie.create(req.body);
    console.log(savedMovie);

    res.redirect('/movies');
})

module.exports = router