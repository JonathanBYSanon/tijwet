document.addEventListener("optionbarLoaded", () => {
    const howToPlayText = document.querySelector("#how-to-play p");
    if (howToPlayText) {
        howToPlayText.innerHTML = `
            Click on the correct tiles to follow a hidden path from the bottom to the top of the grid.
            Each tile in the path is connected to the next one, either horizontally or vertically.
            Only the current and next row are active at a time — choose wisely!
            `;
    }
});

// ######## Variables ########

// Elements
const rowsSetter = document.getElementById("rows-count"); 
const startButton = document.getElementById("start-btn");
const startButtonText = startButton.querySelector("span");
const message = document.querySelector("#message");
const progress = document.getElementById("progress");
const table = document.querySelector("table")
const tbody = table.querySelector("table tbody");

// Game variables
const cols = 4;
let rows = rowsSetter.value;
let path = [];
let steps = 0;
let gameOver = false;
let playerWon = false;
let computing = false;
let isPlaying = false;
let triesCount = 0;

// ######## Events Listeners ########

rowsSetter.addEventListener("input", (e) => {
    rows = e.target.value;
    ClearTableBody();
    message.innerHTML = `Rows: ${rows}. Start your new game!`;
    tbody.innerHTML = `<tr>
                        <td><i class="fas fa-arrow-up"></i></td>
                        <td><i class="fas fa-arrow-up"></i></td>
                        <td><i class="fas fa-arrow-up"></i></td>
                        <td><i class="fas fa-arrow-up"></i></td>
                    </tr>`;
    isPlaying = false;
});

startButton.addEventListener("click", () => {
    
    if (gameOver)
    {
        retryGame();
        startButtonText.innerText = "";
        return;
    }

    else if (!isPlaying || playerWon)
    {
        if (playerWon)
        {
            table.querySelector("thead").classList.remove("won");       
        }
        
        startNewGame();
        progress.innerText = `0 / ${rows}`;
        startButtonText.innerText = "";
    } 

    
});

tbody.addEventListener("click", (e) => {
    
    if (gameOver || playerWon || computing || !isPlaying) return;

    computing = true;

    const target = e.target.closest("td");
    if (!target || target.classList.contains("correct"))
    {
        computing = false;
        return;
    }

    const row = parseInt(target.dataset.row);
    const col = parseInt(target.dataset.col);
    const currentRow = path[steps][0];
    const currentCol = path[steps][1];
  
    if (row === currentRow && col === currentCol) {
        target.classList.add("correct");
        target.innerText = steps + 1;
        progress.innerText = `${currentRow+1} / ${rows}`;
        
        if(steps === 0 || currentRow > path[steps - 1][0])
        {
            activateNextRow();
        }

        steps++;

        if (steps === path.length) {
            message.innerHTML = `Congratulations, You found the trail. After ${triesCount} tries!`;
            playerWon = true;
            table.querySelector("thead").classList.add("won");
            startButtonText.innerText = "START";
        }
  
    } else {
        if(row < currentRow - 1 ) return;
        target.classList.add("wrong");
        message.innerHTML = `Oops! you stepped on the wrong tile. Try again ! `;
        gameOver = true;
        startButtonText.innerText = "RETRY";
    }

    setTimeout(() => {
        computing = false;
    }, 500);
});



// ######## Functions ########

function generateTableBody() {

    computing = true;

    for (let i = rows - 1; i >= 0; i--) {
      const tr = document.createElement("tr");
      tr.dataset.row = i;
  
      for (let j = 0; j < cols; j++) {
        const td = document.createElement("td");
        td.dataset.row = i;
        td.dataset.col = j;
        tr.appendChild(td);
      }
  
      tbody.appendChild(tr);
    }

    computing = false;
}

function ClearTableBody() {
    tbody.innerHTML = "";
}

function generateConnectedPath(rows, cols) {
    const exitCols = Array.from({ length: rows }, () => Math.floor(Math.random() * cols));
  
    for (let i = 0; i < rows - 1; i++) {
      const startCol = exitCols[i];
      const endCol = exitCols[i + 1];
  
      if (i === 0) {
        path.push([i, startCol]);
      }
  
      let col = startCol;
      while (col !== endCol) {
        col += col < endCol ? 1 : -1;
        path.push([i, col]);
      }
  
      // Move down to next row
      path.push([i + 1, endCol]);
    }
  
    return path;
}

function initializeClasses() {
    const firstRow = path[0][0];
  
    document.querySelectorAll("tbody tr").forEach(tr => {
      const rowIndex = parseInt(tr.dataset.row);
      if (rowIndex === firstRow) {
        tr.classList.add("active");
      } else {
        tr.classList.add("coming");
      }
    });
}

function activateNextRow() {
    const currentRow = path[steps][0];
    const nextRow = document.querySelector(`tbody tr[data-row="${currentRow + 1}"]`);
    if (nextRow) {
        nextRow.classList.remove("coming");
        nextRow.classList.add("active");
    }
    message.innerHTML = `New row activated!`;
}

function setTriesCount(reset = false) {
    if (reset) {
        triesCount = 0;
    }
    else {  
        triesCount++;
    }
}
  
function startNewGame() {
    message.innerHTML = `Let's GOOOOOOO!!!!!`;
    isPlaying = true;
    path = [];
    ClearTableBody();
    generateTableBody();
    path = generateConnectedPath(rows, cols);
    initializeClasses();
    steps = 0;   
    setTriesCount(true);
    playerWon = false;
}

function retryGame() {
    if (!gameOver || computing) return;
    
    setTriesCount();
    message.innerHTML = `Tries Counter : ${triesCount}`;

    ClearTableBody();
    generateTableBody();
    initializeClasses();
    gameOver = false;
    steps = 0;
}

message.innerHTML = `Start a new game!`;