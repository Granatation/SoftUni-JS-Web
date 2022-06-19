const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { secret, saltRounds } = require('../config/constants');

exports.register = async({ username, password, repeatPassword }) => {

    if (password !== repeatPassword) {
        throw new Error('Invalid password')
    }

    let hashPass = await bcrypt.hash(password, saltRounds);

    let createdUser = await User.create({
        username,
        password: hashPass
    });

    return createdUser;
};

exports.login = async({ username, password }) => {
    let user = await User.findOne({ username });

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw {
            message: 'Invalid username or password'
        }
    }

    let result = new Promise((resolve, reject) => {
        jwt.sign({ _id: user._id, username: user.username }, secret, { expiresIn: '2d' }, (err, token) => {
            if (err) {
                return reject(err);
            }

            resolve(token);
        });
    });

    return result;
};