document.addEventListener("optionbarLoaded", () => {
  const howToPlayText = document.querySelector("#how-to-play p");
  if (howToPlayText) {
      howToPlayText.innerHTML = `Players take turns placing an X or an O on a 3×3 grid. The first to align three of their marks horizontally, 
      vertically, or diagonally wins. If all spaces are filled without a winner, the game ends in a draw. 2 players mode or 1 player vs AI mode available.`;
  }
});

let ActivePlayer;
let counter;
let isOver = false;
let onePlayerMode = true;
let playerMoves = [];
let aiMoves = [];
let aiHasCenter = false;

let board;

let winCoordinate;

const switchPlayer = () => {
  ActivePlayer = 1 - ActivePlayer; 
  if(onePlayerMode)
  {
    showMessage(`${ActivePlayer === 0 ? 'Your Turn (x)' : 'Ai\'s turn O'}`);
    return;
  }
  showMessage(`Player ${ActivePlayer === 0 ? 'X' : 'O'}'s turn`);
}

const play = (row, col,td) => {
  if (board[row][col] === null) {
    board[row][col] = ActivePlayer;

    // track the move for AI
    if(onePlayerMode)
    {
      if (ActivePlayer === 0) {
        playerMoves.push([row, col]);
      } else {
        aiMoves.push([row, col]);
      }
    }

    td.querySelector('i').className = ActivePlayer === 0 ? 'fas fa-times' : ' far fa-circle';
    counter++;
    return true;
  }
  return false;
}

const checkWinner = () => {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== null && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            winCoordinate.push([i,0],[i,1],[i,2]);
            return true;
        }
    }
    
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== null && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            winCoordinate.push([0,i],[1,i],[2,i]);
            return true;
        }
    }
    
    // Check diagonals
    if (board[0][0] !== null && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        winCoordinate.push([0,0],[1,1],[2,2]);
        return true;
    }
    
    if (board[0][2] !== null && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        winCoordinate.push([0,2],[1,1],[2,0]);
        return true;
    }
    
    return false;
}

function reactToPlay() {

  if (checkWinner()) {
    isOver = true;
    markWinner();

    if(onePlayerMode)
    {
      showMessage(`${ActivePlayer === 0 ? 'You win (x)' : 'Ai wins O'}`);
    }
    else
    {
      showMessage(`Player ${ActivePlayer === 0 ? 'X' : 'O'} wins!`);
    }

  } else if (counter === 9) {
    isOver = true;
    showMessage("It's a draw!");
  } else {
    switchPlayer();
  }

}


const markWinner = () => {
  winCoordinate.forEach((c) => {
      const tr = boardUi.rows[c[0]];
      const td = tr.cells[c[1]];
      td.classList.add("winner");
  });
}

const showMessage = (message) => {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
}

const reset = (all) => {
    ActivePlayer = 0;
    counter = 0;
    winCoordinate = [];
    board = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ];
    playerMoves = [];
    aiMoves = [];
    aiHasCenter = false;

    if (all) {
        Array.from(boardUi.rows).forEach((tr) => {
            Array.from(tr.cells).forEach((td) => {
                td.querySelector('i').className = "fas fa-square placeholder";
                td.classList.remove("winner");
            });
        });
    }  

    showMessage(`Player ${ActivePlayer === 0 ? 'X' : 'O'}'s starts`);
    isOver = false;
}

// function modeDisplay() {
//   if (onePlayerMode) {
//     modeSpan.textContent = "1 Player";
//   } else {
//     modeSpan.textContent = "2 Players";
//   }
// }

/*############### UI ###########################*/

const boardUi = document.getElementById("board");
const modeSwitcher = document.querySelector("#mode-toggle input[type='checkbox']");
//const modeSpan = document.getElementById("mode");

// modeSwitcher.addEventListener("change", () => {
//   reset(true);
//   onePlayerMode = modeSwitcher.checked;
//   modeDisplay();
// });

boardUi.addEventListener("click", (e) => {

    if (isOver || (onePlayerMode && ActivePlayer === 1)) {
        return;
    }

  const td = e.target.closest("td");

  if (td) {
    const tr = td.parentElement;
    const rowIndex = Array.from(boardUi.rows).indexOf(tr);
    const colIndex = Array.from(tr.cells).indexOf(td);

    if(play(rowIndex, colIndex, td)) {
      reactToPlay();

      if (onePlayerMode && ActivePlayer === 1 && !isOver) {

        setTimeout(() => {
          const aiMove = getAIMove();
          const td = boardUi.rows[aiMove[0]].cells[aiMove[1]];

          if (play(aiMove[0], aiMove[1], td)) {
            reactToPlay();
          }
        }, 1000);
      }
    }

  }
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    reset(true);
});

// ################# Initialization ##################
reset(false);
modeDisplay();



// ################ AI Logic ##################


function getAIMove(){
  const center = [1, 1];

  const corners = [
    [0, 0], [0, 2],
    [2, 0], [2, 2]
  ];

  const sides = [
    [0, 1], [1, 0],
    [1, 2], [2, 1]
  ];

  let result = null;

  if (counter === 1) {
    // Center if possible
    if (isCellEmpty(center))
    {
      aiHasCenter = true;
      result = center;
    }
    else{
      // corner if center is taken
      result = corners[Math.floor(Math.random() * 4)];
    }
  }

  else if (counter === 3 && playerMoves.length === 2)
  {

    // ******* direct defense move ***********
    result = checkTwoCellsAlignment(playerMoves);

    if (result == null) {
      // no direct defense move found
      // L shape cases
      if (
          (playerMoves[0][0] === 1 || playerMoves[1][0] === 1 ||
          playerMoves[0][1] === 1 || playerMoves[1][1] === 1)
      ) {
        const row = playerMoves[0][0] === 1 ? playerMoves[1][0] : playerMoves[0][0];
        const col = playerMoves[0][1] === 1 ? playerMoves[1][1] : playerMoves[0][1];
      
        if (board[row][col] === null) {
          return [row, col];
        }
      }

    }
    else if (!isCellEmpty(result)) {

      // the danger was already blocked
      // Ai has center
      if(aiHasCenter) {
        let sideNumber = 0;
        do {
          result = sides[sideNumber];
          sideNumber++;
        } while (!isCellEmpty(result));
      }

      // Ai does not have center
      else
      {
        let cornerNumber = 0;
        do {
          result = corners[cornerNumber];
          cornerNumber++;
        } while (!isCellEmpty(result));
      }
    }  
  }

  else if (counter === 5 && aiMoves.length === 2) 
  {
    // ******* direct winning move ***********
    result = checkTwoCellsAlignment(aiMoves);

    if (result == null || !isCellEmpty(result)) {
      // no direct winning move found
      // Check for defense move
      result = CheckAllAlignments(playerMoves);
    }
    
    if (result == null || !isCellEmpty(result)) {
      // no direct winning or defense move found
      // Check for best move
      result = findBestMove();
    }



  }

  else {
    result = CheckAllAlignments(aiMoves);
    if (result == null || !isCellEmpty(result)) {
      // no direct winning move found
      // Check for defense move
      result = CheckAllAlignments(playerMoves);
    }
  }

  // ******* random move fallback ***********
  if ( result == null || !isCellEmpty(result)) {
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === null) {
          result = [i, j];
          return result;
        }
      }
    }
  }

  return result;
}

function findLastEmptyCell(total)
{
  return 3 - total;
}

function isCellEmpty(cell)
{
  return board[cell[0]][cell[1]] === null;
}

function checkTwoCellsAlignment(cellsTocheck)
{
  let checkResult = null;
  // player played same row
  if (cellsTocheck[0][0] === cellsTocheck[1][0]) {
    const row = cellsTocheck[0][0];
    const coltotal = cellsTocheck[0][1] + cellsTocheck[1][1];
    checkResult = [row, findLastEmptyCell(coltotal)]
  }

  // player played same column
  else if (cellsTocheck[0][1] === cellsTocheck[1][1]) {
    const col = cellsTocheck[0][1];
    const rowtotal = cellsTocheck[0][0] + cellsTocheck[1][0];
    checkResult  = [findLastEmptyCell(rowtotal), col];
  }

  else if (!aiHasCenter || ActivePlayer === 1)
  {
      // MAIN DIAGONAL
      if (cellsTocheck.every(([r, c]) => r === c)) {
        const diagonal = [[0,0], [1,1], [2,2]];
        const missing = diagonal.find(([r, c]) =>
          !cellsTocheck.some(([rr, cc]) => rr === r && cc === c)
        );
    
        if (missing) checkResult = missing;
      }
    
      // ANTI-DIAGONAL
      else if (cellsTocheck.every(([r, c]) => r + c === 2)) {
        const antiDiagonal = [[0,2], [1,1], [2,0]];
        const missing = antiDiagonal.find(([r, c]) =>
          !cellsTocheck.some(([rr, cc]) => rr === r && cc === c)
        );
    
        if (missing) checkResult = missing;
      }
  }
  return checkResult;
}

function CheckAllAlignments(AllcellsToCheck)
{
  let checkResultAll = null;
  const allCombinations = getIndexPairs(AllcellsToCheck);

  for (const pair of allCombinations) {
    checkResultAll = checkTwoCellsAlignment([
      AllcellsToCheck[pair[0]],
      AllcellsToCheck[pair[1]]
    ]);

    if ( checkResultAll !== null && isCellEmpty(checkResultAll)) {
      break;
    }
  }

  return checkResultAll;
}


function getIndexPairs(table) {
  let combinations = [];

  for (let i = 0; i < table.length - 1; i++) {
    for (let j = i + 1; j < table.length; j++) {
      combinations.push([i, j]);
    }
  }

  return combinations;
}

function findBestMove() {
  let bestMove = null;
  let remainingMoves = [];

  // find all empty cells
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === null) {
        remainingMoves.push([i, j]);
      }
    }
  }

  // simulate all possible moves for the AI
  for (let i = 0; i < remainingMoves.length; i++) {
    let HypotesisAiPlay = [...aiMoves, remainingMoves[i]];
    let hypotesisResult = CheckAllAlignments(HypotesisAiPlay);
    if (hypotesisResult !== null && isCellEmpty(hypotesisResult)) {
      bestMove = remainingMoves[i];
      break;
    }
  }
  return bestMove;
}