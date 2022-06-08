const express = require('express');

const app = express();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

//const password = 'mysecretpass';
const hashedPassword = '$2b$10$Kw3zIv/1AZaugweDa8HPbufCp1bhvlQBXIeSFwmlP0oGX6jdPgSoS';
const saltRounds = 10;
const secret = 'MySecret';

app.get('/hash/:password?', async(req, res) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(req.params.password, salt)
    res.send(hash);
});


app.get('/login/:password?', async(req, res) => {
    const isValidPass = await bcrypt.compare(req.params.password, hashedPassword);

    if (isValidPass) {
        const payload = { username: 'Pesho' };
        const options = { expiresIn: '2d' }

        const token = jwt.sign(payload, secret, options);

        res.send(token);
    } else {
        res.send('Wrong password')
    }
});

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBlc2hvIiwiaWF0IjoxNjU0NzEyMzY0LCJleHAiOjE2NTQ4ODUxNjR9.9AFcAKDsRZ1kON4mSi805VZaf9f7_JgYgyCkx67LiGI
app.get('/verify/:token', (req, res) => {
    try {
        let decodedToken = jwt.verify(req.params.token, secret);

        res.json(decodedToken);
    } catch (error) {
        res.status(401).send(error);
    }
});


app.listen(5000, () => console.log('Server listening on port 5000'))