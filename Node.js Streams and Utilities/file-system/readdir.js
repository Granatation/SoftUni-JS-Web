const fs = require('fs');

fs.readdir('./file-system', (err, data) => {
    if (err) console.log(err);

    console.log(data);
});