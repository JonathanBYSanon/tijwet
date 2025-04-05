document.addEventListener("optionbarLoaded", () => {
    const howToPlayText = document.querySelector("#how-to-play p");
    if (howToPlayText) {
        howToPlayText.innerHTML = `Click to flip the coin. The coin will randomly land on either heads or tails. Use the result however you want — for challenges, group games, or just for fun!<br>
            Head : <i class='fas fa-smile-beam'></i> - Tail : <i class='fas fa-dollar-sign'></i>`;
    }
});

const coinSides = ["far fa-smile-beam", "fas fa-dollar-sign"];

const flipButton = document.getElementById("flip-button");
const coin = document.querySelector(".coin");

flipButton.addEventListener("click", () => {
    coin.classList.add("flipping");
    coin.querySelector("i").className = "fas fa-question-circle";
    

    setTimeout(() => {
        const result = Math.floor(Math.random() * 2) ;
        coin.querySelector("i").className = coinSides[result];
        setTimeout(() => {
            coin.classList.remove("flipping");
        }, 500);
    }, 4000);
});

