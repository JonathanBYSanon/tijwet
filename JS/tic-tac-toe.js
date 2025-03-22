let ActivePlayer;
let counter;
let isOver = false;

let board;

let winCoordinate;

const switchPlayer = () => {
  ActivePlayer = 1 - ActivePlayer;
}

const play = (row, col,td) => {
  if (board[row][col] === null) {
    board[row][col] = ActivePlayer;
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

/* UI */
const boardUi = document.getElementById("board");

boardUi.addEventListener("click", (e) => {

    if (isOver) {
        return;
    }

  const td = e.target.closest("td");

  if (td) {
    const tr = td.parentElement;
    const rowIndex = Array.from(boardUi.rows).indexOf(tr);
    const colIndex = Array.from(tr.cells).indexOf(td);

    if(play(rowIndex, colIndex, td)) {
      if (checkWinner()) {
        isOver = true;
        markWinner();
        showMessage(`Player ${ActivePlayer === 0 ? 'X' : 'O'} wins!`);  
      } 
      else {
        if (counter === 9) {
            isOver = true;
          showMessage("It's a draw!");        
        } 
        else {
            switchPlayer();
            showMessage(`Player ${ActivePlayer === 0 ? 'X' : 'O'}'s turn`);
        }
      }
    }

  }
});

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

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    reset(true);
});

reset(false);