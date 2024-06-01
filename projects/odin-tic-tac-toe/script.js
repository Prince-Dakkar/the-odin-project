/** Constructor for Players. */
function makePlayer(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker} ;
}


/** One time Constructor for the Game Object. */
const Game = (function() {
    const scoresBoard = document.querySelector(".scores");
    const p1_name = document.querySelector("#player1-name");
    const p2_name = document.querySelector("#player2-name");
    const board = document.querySelector(".board");
    const submit_btn = document.querySelector("#sub");
    const p1_score = document.querySelector("#player1-score");
    const p2_score = document.querySelector("#player2-score");
    let turns = 1;
    const callTurn = () => turns++;
    const getTurns = () => turns;
    const resetTurns = () => turns = 1;

    const GameBoard = (function() {
        const gameBoard = [3, 4, 5, 6, 7, 8, 9, 10, 11];
        const spaces = [];
    
        const getBoard = () => gameBoard;
        const getSpaces= () => spaces;
        const clearBoard = () => {
            gameBoard = [3, 4, 5, 6, 7, 8, 9, 10, 11];
        };

        return {getBoard, clearBoard, getSpaces};
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

    function triggerSpaces() {
        Game.GameBoard.getSpaces().forEach(space => {
            space.addEventListener("click", () => {
                if(space.innerText === "O" || space.innerText === "X") {
                    alert("You can't place your mark on an already taken square!!!");
                } else {
                    if(Game.getTurns() % 2 === 1) {
                        space.innerText = "O";
                        Game.GameBoard.getBoard()[space.id] = 1;
                    } else {
                        space.innerText = "X";
                        Game.GameBoard.getBoard()[space.id] = 2;
                    }
                    Game.callTurn()
                    console.log(Game.GameBoard.getBoard()[0]);
                    console.log(Game.checkWin());
                    if (Game.checkWin()) {
                        if (Game.getTurns() % 2 === 1) {
                            alert(Game.Player2.getName() + " won!");
                            Game.endGame(2);
                        } else {
                            alert(Game.Player1.getName() + " won!");
                            Game.endGame(1);
                        }
                        
                    }
                }      
            });
        });
    }

    function endGame(num) {
        // Game.GameBoard.getSpaces() = [];
        let i = 0;
        Game.GameBoard.getSpaces().forEach(space => {
            let new_space = space.cloneNode(true);
            space.parentNode.replaceChild(new_space, space);
            Game.GameBoard.getSpaces()[i] = new_space;
            Game.GameBoard.getBoard()[i] = i+3;
            i++;
        });
        const rematch = document.querySelector("#rematch");
        rematch.style.display = "block";

        if (num === 1) {
            p1_score.textContent = p1_score.value++;
        } else {
            p2_score.textContent = p2_score.value++;
        }
        resetTurns();
    }

    function startGame() {
        const name1 = document.querySelector("#player1-f").value;
        const name2 = document.querySelector("#player2-f").value;
        Game.Player1 = makePlayer(name1, "O");
        Game.Player2 = makePlayer(name2, "X");
        Game.triggerSpaces(); 
        board.style.background = "Black";
        submit_btn.style.display = "none";
        scoresBoard.style.display = "block";
        p1_name.textContent = Game.Player1.getName() + ":";
        p2_name.textContent = Game.Player2.getName() + ":";
    }

    function newGame(){
        console.log("Entered new game function.");
        Game.GameBoard.getSpaces().forEach(space => {
            space.innerText = "";
        });
        Game.triggerSpaces();
        const rematch = document.querySelector("#rematch");
        rematch.style.display = "none";
    }

    return {GameBoard, callTurn, getTurns, checkWin, endGame, triggerSpaces, startGame, newGame, resetTurns};
})();


/** Draw the beginning board. */
(function drawBoard () {
    console.log("draw entered");
    const board = document.querySelector(".board");
    for (let i = 0; i < 9; i++) {
        const space = document.createElement("button");
        space.classList.add("spot");
        space.id = "" + i;
        board.appendChild(space);
        Game.GameBoard.getSpaces().push(space);
    }
})();