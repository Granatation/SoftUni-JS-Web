const bcrypt = require('bcrypt');

const User = require('../models/user');

const saltRounds = 10

exports.register = async({ username, password, repeatPassword }) => {

    if (password !== repeatPassword) {
        return false
    }

    let hashPass = await bcrypt.hash(password, saltRounds);

    let createdUser = User.create({
        username,
        password: hashPass
    });

    return createdUser;
};

exports.login = async({ username, password }) => {
    let user = await User.findOne({ username });

    if (!user) {
        return
    }

    return bcrypt.compare(password, user.password);
};