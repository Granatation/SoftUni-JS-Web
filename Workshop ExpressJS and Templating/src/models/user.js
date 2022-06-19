const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const { saltRounds } = require('../config/constants');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// userSchema.pre('save', function(next) {
//     bcrypt.hash(this.password, saltRounds)
//         .then(hashedPassword => {
//             this.password = hashedPassword;
//         });

//     next();
// });

userSchema.virtual('repeatPassword').set(function(value) {
    if (this.password !== value) {
        throw new Error('Repeat password should match password')
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;