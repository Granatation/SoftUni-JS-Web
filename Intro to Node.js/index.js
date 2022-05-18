const http = require('http');

const homePage = require('./resources/views/home');
const siteCss = require('./styles/site');
const addCatPage = require('./resources/views/addCat');
const addBreedPage = require('./resources/views/addBreed');
const cats = require('./cats.json')

const catTemplate = (cat) => `
    <li>
        <img src=${cat.imageUrl} alt="Black Cat">
        <h3>${cat.name}</h3>
        <p><span>Breed: </span>${cat.breed}</p>
        <p><span>Description: </span>${cat.description}</p>
        <ul class="buttons">
            <li class="btn edit"><a href="">Change Info</a></li>
            <li class="btn delete"><a href="">New Home</a></li>
        </ul>
    </li>
`

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (req.url == '/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });

        res.write(siteCss);

    } else if (req.url == '/cats/add-cat') {
        res.write(addCatPage);

    } else if (req.url == '/cats/add-breed') {
        res.write(addBreedPage);

    } else {
        const homePageResult = homePage.replace('{{cats}}', cats.map(catTemplate).join(''));

        res.write(homePageResult);
    }


    res.end();
});

server.listen(3000, () => console.log('Server is listening on port 5000...'));