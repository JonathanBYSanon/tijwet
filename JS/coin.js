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