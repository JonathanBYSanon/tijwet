const input = document.getElementById("dice-count");
const rollBtn = document.getElementById("roll-btn");
const diceContainer = document.getElementById("dices-container");
const totalSpan = document.querySelector("#total span");

const diceIcons = [
  "fa-dice-one",
  "fa-dice-two",
  "fa-dice-three",
  "fa-dice-four",
  "fa-dice-five",
  "fa-dice-six"
];

let count = 2;

// Reusable render function
function renderDice(values) {
  diceContainer.innerHTML = "";
  let total = 0;

  values.forEach(value => {
    const icon = document.createElement("i");
    icon.className = `fas ${diceIcons[value - 1]}`; // value is 1–6
    diceContainer.appendChild(icon);
    total += value;
  });

  totalSpan.textContent = total;
}

// On input change: preview dice with all 1s
input.addEventListener("input", () => {
  count = parseInt(input.value);
  const values = Array(count).fill(1);
  renderDice(values);
});

// On button click: roll dice and render result
rollBtn.addEventListener("click", () => {
    const diceEls = Array.from(diceContainer.children);
    const values = [];
    const classes = [];
  
    // Step 1: Prepare random values and final classes
    for (let i = 0; i < count; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      classes.push(`fas ${diceIcons[value - 1]}`);
    }
  
    // Step 2: Add animation + placeholder icon
    diceEls.forEach(icon => {
      icon.classList.add("die-animating");
    });
  
    // Step 3: Apply result after animation
    setTimeout(() => {
      let total = 0;
      diceEls.forEach((icon, i) => {
        icon.className = classes[i];
        total += values[i];
      });
      totalSpan.textContent = total;
    }, 2000); // match your animation duration
});  

input.value = count;
