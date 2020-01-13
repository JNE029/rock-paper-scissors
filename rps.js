let randomInt = Math.floor(Math.random() * Math.floor(3));
function compChoice() {
    if (randomInt === 1) {
        return "rock";
    } else if (randomInt === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const playerChoice = prompt("Rock, paper or scissors?");
const playerCheck = playerChoice.toLowerCase();

const outcome = {
    rock: {lose: "paper", win: "scissors"},
    paper: {lose: "scissors", win: "rock"},
    scissors: {lose: "rock", win: "paper"}
}

function roundWinner() {
    if (outcome[playerCheck].win === compChoice()) {
        alert("You win!");
        return true;
    } else if (outcome[playerCheck].lose === compChoice()) {
        alert("Computer wins!");
        return false;
    } else {
        alert("Tie!");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let result = roundWinner();

        if (result == true) {
            playerScore++;
            return window.prompt("Rock, paper or scissors?").toLowerCase();
        } else if (result == false) {
            computerScore++;
            return window.prompt("Rock, paper or scissors?").toLowerCase();
        } else {
            return window.prompt("Rock, paper or scissors?").toLowerCase();
        }
    }
    
    if (playerScore > computerScore) {
        return "You win this game! " + playerScore + " : " + computerScore;
    } else if (playerScore < computerScore) {
        return "Computer wins this game! " + playerScore + " : " + computerScore;
    } else {
        return "This game is a tie! " + playerScore + " : " + computerScore;
    }
}

game();
console.log(game());