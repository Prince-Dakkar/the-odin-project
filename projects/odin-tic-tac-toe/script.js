// let turn = 1;


function makePlayer(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;

    return {getName, getMarker} ;
}



const Game = (function() {

    const GameBoard = (function() {
        const gameBoard = [3, 4, 5, 6, 7, 8, 9, 10, 11];
    
        const getBoard = () => gameBoard;
        return {getBoard};
    })();

    function checkWin() {
        const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        let x = false;
        wins.forEach(win => {
            if (!x) {
                x = GameBoard.getBoard()[win[0]] === GameBoard.getBoard()[win[1]] && GameBoard.getBoard()[win[1]] === GameBoard.getBoard()[win[2]];
            } 
        });
        return x;
    }

    function endGame() {

    }

    let turns = 1;
    const callTurn = () => turns++;
    const getTurns = () => turns;
    return {GameBoard, callTurn, getTurns, checkWin, endGame};
})();

function drawBoard () {
    console.log("draw entered");
    const board = document.querySelector(".board");
    for (let i = 0; i < 9; i++) {
        const space = document.createElement("button");
        space.classList.add("spot");
        space.id = "" + i;
        board.appendChild(space);
        space.addEventListener("click", () => {
            if(space.innerText === "O" || space.innerText === "X") {
                alert("You can't place your mark on an already taken square!!!");
            } else {
                if(Game.getTurns() % 2 === 1) {
                    space.innerText = "O";
                    Game.GameBoard.getBoard()[i] = 1;
                } else {
                    space.innerText = "X";
                    Game.GameBoard.getBoard()[i] = 2;
                }
                Game.callTurn()
                console.log(Game.GameBoard.getBoard()[0]);
                console.log(Game.checkWin());
                if (Game.checkWin()) {
                    alert("A winner!");
                }
            }      
        });
    }
}


drawBoard();