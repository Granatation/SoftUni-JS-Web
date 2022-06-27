const Furniture = require('../models/Furniture');

async function getAll() {
    return Furniture.find({});
}

async function create(furniture) {
    const result = new Furniture({
        make: furniture.make,
        model: furniture.model,
        year: furniture.year,
        description: furniture.description,
        price: furniture.price,
        img: furniture.img,
        material: furniture.material
    });

    await result.save();

    return result;
}
module.exports = {
    getAll,
    create
}