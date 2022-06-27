const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    make: { type: String },
    model: { type: String },
    year: { type: Number },
    description: { type: String },
    price: { type: Number },
    img: { type: String },
    material: { type: String }
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;