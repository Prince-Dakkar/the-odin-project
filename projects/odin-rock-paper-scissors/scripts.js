let humanScore = 0, computerScore = 0;
const p_btn = document.getElementById("paper");
const s_btn = document.getElementById("scissors");
const r_btn = document.getElementById("rock");
const result_msg = document.querySelector("#taunt");
const your_score = document.querySelector("#p_score_label");
const comp_score = document.querySelector("#c_score_label");
const win_msg = document.querySelector("#win-msg");
let game_session_ongoing = true;
const choice = ["Paper", "Scissors", "Rock"];


function getComputerChoice() {
    let rand = Math.random();
    if (rand < .33333333333) {
        return 0;
    } else if (rand < .6666666666) {
        return 1;
    } else return 2;
}

function playRound(hC) {
    if (game_session_ongoing) {
        const cC = getComputerChoice();
        if (hC === cC) {
            // They are the same
            result_msg.textContent = "You and the Computer tied This Round!";
            result_msg.style.backgroundColor = "yellow";
        } else {
            if (Math.abs(hC - cC) == 1) {
                // Bc of how the sequ. P, S, R is set up, if the indices are sequential, the greater wins
                if (hC > cC) {
                    result_msg.textContent = "You Won This Round! " + choice[hC] + " beats " + choice[cC] + "!";
                    result_msg.style.backgroundColor = "lightgreen";
                    humanScore++;
                    your_score.textContent = humanScore;
                } else {
                    result_msg.textContent = "The Computer Won This Round! " + choice[cC] + " beats " + choice[hC] + "!";
                    result_msg.style.backgroundColor = "red";
                    computerScore++;
                    comp_score.textContent = computerScore;
                }
            } else { 
                // One is paper and the other rock
                if (hC == 0) {
                    result_msg.textContent = "You Won This Round! " + choice[hC] + " beats " + choice[cC] + "!";
                    result_msg.style.backgroundColor = "lightgreen";
                    humanScore++;
                    your_score.textContent = humanScore;
                }  else {
                    result_msg.textContent = "The Computer Won This Round! " + choice[cC] + " beats " + choice[hC] + "!";
                    result_msg.style.backgroundColor = "red";
                    computerScore++;
                    comp_score.textContent = computerScore;
                }
            }
        }
        if (humanScore >= 5) {
            win_msg.textContent = "YOU WON THE GAME!!!! \r\nTo Play Again, Reload the Page";
            game_session_ongoing = false;
            
        } 
        if (computerScore >= 5) {
            win_msg.textContent = "THE COMPUTER WON :( \r\n To Play Again, Reload the Page";
            game_session_ongoing = false;
            
        }
    }    
}

p_btn.addEventListener("click", () => playRound(0));
s_btn.addEventListener("click", () => playRound(1));
r_btn.addEventListener("click", () => playRound(2));
