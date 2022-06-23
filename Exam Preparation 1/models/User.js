const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/env')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password required']
    },
    address: {
        type: String,
        required: [true, 'Address required']
    },
    myPublications: [{
        type: mongoose.Types.ObjectId,
        ref: 'Publication'
    }],
    shares: [{
        type: mongoose.Types.ObjectId,
        ref: 'Publication'
    }]
});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hashedPass => {
            this.password = hashedPass;

            next();
        });
})

const User = mongoose.model('User', userSchema);

module.exports = User;