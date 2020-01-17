let playerChoice;
let compChoice;

/*
function playerSelection() {
    const playerBtns = document.querySelector("button");
    playerBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            let playerChoice = button.id;   
            console.log(playerChoice);     
        });
    });  
}
*/

function compSelection() {
    choices = ["rock", "paper", "scissors"];

    const compChoice = Math.floor(Math.random() * choices.length);
    return choices[compChoice];
} 

function roundWinner() {
    const outcome = {
        rock: {lose: "paper", win: "scissors"},
        paper: {lose: "scissors", win: "rock"},
        scissors: {lose: "rock", win: "paper"}
    }

    if (outcome[playerChoice].win === compChoice()) {
        alert("You win!");
    } else if (outcome[playerChoice].lose === compChoice()) {
        alert("Computer wins!");
    } else {
        alert("Tie!");
    }
}  

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let totalScore = playerScore + computerScore;


}

function playerSelection() {
    const playerBtns = document.querySelector(".playerchoices");
    playerBtns.forEach((button) => {
        playerchoices.addEventListener("click", (e) => {
            let playerChoice = button.id;
            console.log(playerChoice);
        });
    });
}

playerSelection();

