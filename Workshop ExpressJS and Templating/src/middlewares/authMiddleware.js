const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const { secret, sessionName } = require('../config/constants');

jwtVerify = promisify(jwt.verify);

exports.auth = async(req, res, next) => {
    let token = req.cookies[sessionName];

    if (token) {
        try {
            let decodedToken = await jwtVerify(token, secret)

            req.user = decodedToken;
        } catch (error) {
            return res.redirect('/404')
        }
    }

    next();
}

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/404');
    }

    next();
}