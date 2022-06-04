const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
        maxlength: 120
    },
    cubes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cube'
    }]
});

accessorySchema.path('imageUrl').validate(function() {
    return this.imageUrl.startsWith('http');
}, 'imageUrl should be a link');

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;