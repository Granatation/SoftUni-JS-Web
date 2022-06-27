const { getAll, create } = require('../services/furnitureService');

const router = require('express').Router();

router.get('/', async(req, res) => {
    res.json(await getAll());
});

router.post('/', async(req, res) => {

    console.log(req.body);
    const furniture = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        material: req.body.material
    };

    try {
        const result = await application.create(furniture);
        res.json(result);
    } catch (error) {
        res.status(404).json({ message: 'Request error' })
    }
});

module.exports = router;