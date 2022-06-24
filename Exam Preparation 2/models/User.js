const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/env')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required'],
    },
    username: {
        type: String,
        required: [true, 'Username required'],
    },
    password: {
        type: String,
        required: [true, 'Password required']
    }

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