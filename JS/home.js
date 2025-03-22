let games = [
    {
        "img" : "ASSETS/tic-tac-toe.webp",
        "title" : "Tic Tac Toe",
        "url" : "HTML/GAME/tic-tac-toe.html"
    },
    {
        "img" : "ASSETS/more_coming_soon.webp",
        "title" : "MORE COMING SOON",
        "url" : "#"
    },
];

const body_main = document.querySelector('body main'); 
const game_template = document.querySelector('#game-template');

let game_clone;

games.forEach(game => {
    game_clone = game_template.content.cloneNode(true);
    let img = game_clone.querySelector('img');
    img.src = game.img;
    img.alt = game.title;
    game_clone.querySelector('h2').textContent = game.title;
    game_clone.querySelector('a').href = game.url;
    body_main.appendChild(game_clone);
});