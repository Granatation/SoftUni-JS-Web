const fs = require('fs/promises');

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
`;

async function renderHome(search) {
    let homePage = await fs.readFile('./resources/views/home.html', 'utf-8');
    let text = await fs.readFile('./cats.json', 'utf-8');

    let cats = JSON.parse(text);

    let catsPageResult = cats
        .filter(x => search ? x.name.toLowerCase().includes(search.toLowerCase()) : true)
        .map(catTemplate).join('');

    const homePageResult = homePage.replace('{{cats}}', catsPageResult);

    return homePageResult;
}

exports.renderHome = renderHome;