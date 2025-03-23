let games = [
    {
        "img" : "ASSETS/tic-tac-toe.webp",
        "title" : "Tic Tac Toe",
        "url" : "HTML/GAME/tic-tac-toe.html",
        "default" : false
    },
    {
        "img" : "ASSETS/more_coming_soon.webp",
        "title" : "MORE COMING SOON",
        "url" : "#",
        "default" : true
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
    let a = game_clone.querySelector('a');
    a.href = game.url;

    if (game.default) {
        game_clone.querySelector('.game').classList.add('default');
        a.textContent = "+";
    }

    body_main.appendChild(game_clone);
});


const searchInput = document.getElementById("game-search");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const gamesUi = document.querySelectorAll("main .game:not(.default)");

    gamesUi.forEach(game => {
      const title = game.querySelector(".game-title")?.textContent.toLowerCase() || "";
      const match = title.includes(searchTerm);
      game.style.display = match ? "grid" : "none";
    });
  });
}