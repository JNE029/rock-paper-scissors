//Player interaction 
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let playerChoice;

rockButton.addEventListener("click", roundWinner("rock", compChoice()));
paperButton.addEventListener("click", roundWinner("paper", compChoice()));
scissorsButton.addEventListener("click", roundWinner("scissors", compChoice()));

//Computer interaction 
//fix randomInt -> referenceError lexical 
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


//Actual game
const outcome = {
    rock: {lose: "paper", win: "scissors"},
    paper: {lose: "scissors", win: "rock"},
    scissors: {lose: "rock", win: "paper"}
}

function roundWinner() {
    if (outcome[playerChoice].win === compChoice()) {
        alert("You win!");
        return true;
    } else if (outcome[playerChoice].lose === compChoice()) {
        alert("Computer wins!");
        return false;
    } else {
        alert("Tie!");
    }
}

//Testing
console.log(compChoice());
console.log(playerchoice);
