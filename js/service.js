// array og projects

gProjs = [{
        id: "minesweeper",
        name: "Minesweeper",
        title: "My version of minesweeper game", // ?
        desc: makeLorem(), // תיאור יותר ארוך של הפרוייקט
        url: "projs/minesweeper",
        publishedAt: '03/10/20',
        labels: ["Matrixes", "keyboard events"],
        img: 'minesweeper.png',
        git: 'https://yuvalbeiton.github.io/firstDelivery/'
    },
    {
        id: "bookShop",
        name: "Book Shop",
        title: "Online book shop",
        desc: makeLorem(),
        url: "projs/bookShop",
        publishedAt: '06/10/20',
        labels: ["CRUDL", "MVC"],
        img: 'bookshop.png',
        git: 'https://yuvalbeiton.github.io/firstDelivery/'
    },
    {
        id: "drinksShop",
        name: "Drinks Shop",
        title: "Online drinks shop use Bootstrap",
        desc: makeLorem(),
        url: "projs/drinksShop",
        publishedAt: '08/10/20',
        labels: ["Bootstrap"],
        img: 'drinks-shop.png',
        git: 'https://yuvalbeiton.github.io/firstDelivery/'
    },
    {
        id: "pacman",
        name: "Pacman",
        title: "My version of Pacman game",
        desc: makeLorem(),
        url: "projs/pacman",
        publishedAt: '03/10/20',
        labels: ["Matrixes", "Board-Games"],
        img: 'pacman.png',
        git: 'https://yuvalbeiton.github.io/firstDelivery/'
    },
    {
        id: "guess-me",
        name: "Guess-Me",
        title: "My version of Guess-Me game",
        desc: makeLorem(),
        url: "projs/guess-me",
        publishedAt: '07/10/20',
        labels: ["Tree-Data-Structure", "jQuery"],
        img: 'guess-me.png',
        git: 'https://yuvalbeiton.github.io/firstDelivery/'
    },
    {
        id: "ball-board",
        name: "Ball-Board",
        title: "A simple Ball-board game",
        desc: makeLorem(),
        url: "projs/ball-board",
        publishedAt: '03/10/20',
        labels: ["Matrixes", "Board-Games"],
        img: 'ball-board.png',
        git: 'https://yuvalbeiton.github.io/firstDelivery/'
    }
];



function getProjById(projId) {
    var proj = gProjs.find(function(proj) {
        return projId === proj.id;
    })
    return proj;
}

function getProjs() {
    return gProjs;
}