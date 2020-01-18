let playerChoice;
let compChoice;

const playerBtns = document.querySelectorAll("button");
playerBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        let playerChoice = button.id;
    });
});

function compSelection() {
    choices = ["rock", "paper", "scissors"];

    let compChoice = Math.floor(Math.random() * choices.length);
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

