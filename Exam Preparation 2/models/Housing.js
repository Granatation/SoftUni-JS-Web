const mongoose = require('mongoose');

const housingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required'],
    },
    type: {
        type: String,
        required: [true, 'Type required'],
        enum: ["Apartment", "Villa", "House"]
    },
    year: {
        type: Number,
        required: [true, 'Year required']
    },
    city: {
        type: String,
        required: [true, 'City required']
    },
    homeImage: {
        type: String,
        required: [true, 'Image required']
    },
    description: {
        type: String,
        required: [true, 'Description required']
    },
    availablePieces: {
        type: Number,
        required: [true, 'Pieces required']
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    renters: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Housing = mongoose.model('Housing', housingSchema);

module.exports = Housing;