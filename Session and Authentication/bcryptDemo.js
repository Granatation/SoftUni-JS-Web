const express = require('express');

const app = express();

const bcrypt = require('bcrypt');

//const password = 'mysecretpass';
const hashedPassword = '$2b$10$Kw3zIv/1AZaugweDa8HPbufCp1bhvlQBXIeSFwmlP0oGX6jdPgSoS';
const saltRounds = 10;

app.get('/hash/:password?', async(req, res) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(req.params.password, salt)
    res.send(hash);
});


app.get('/login/:password?', async(req, res) => {
    const isValidPass = await bcrypt.compare(req.params.password, hashedPassword);

    if (isValidPass) {
        res.send('Successful login');
    } else {
        res.send('Wrong password')
    }
});

app.listen(5000, () => console.log('Server listening on port 5000'))