//Define Global Variables
const PLAYERS = {
    '1': 'X',
    '-1': 'O',
    'null': ''
}
var board, winner, turn;
var winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8]
]

//Grab Elements
var msgElem = document.getElementById('msg');
var cells = document.querySelectorAll('.cells');
//console.log(cells);

init();
function init() {
    
for (i=0; i<cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
}

board = [null, null, null, null, null, null, null, null, null]
turn = 1;
winner = null;
render();
}

function render () {
 board.forEach(function(cell, cellIdx) {
         cells[cellIdx].textContent = PLAYERS[cell];
     })

    for(i=0; i<cells.length; i++) {
    if (winner) {
     msgElem.textContent = `${PLAYERS[winner]} WINS!`;
    }
 }
}


function handleClick(evt) {
    var cellIdx = parseInt(evt.target.id);
    if (board[cellIdx] || winner) return;
    board[cellIdx] = turn;
    turn *= -1;
    checkTurn();
    winner = checkWinner();
    render();
}

function checkTurn () {
    if (turn === 1) {
        msgElem.textContent = `Player One's Turn`;
    } else if (turn === -1) {
        msgElem.textContent
    = `Player Two's Turn`;     
    }
}

function checkWinner() {
    for (var i = 0; i < winning.length; i++) {
        if (Math.abs(board[winning[i][0]] + board[winning[i][1]] + board[winning[i][2]]) === 3) return board[winning[i][0]]; 
    }
}