/*
const playerBtns = document.querySelectorAll("button");
playerBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        let playerChoice = button.id;
    });
});
*/

let playerRock = document.getElementById("rock");
let playerPaper = document.getElementById("paper");
let playerScissors = document.getElementById("scissors");
let playerScore = 0;
let compScore = 0;
let totalScore = playerScore + compScore;

playerRock.addEventListener("click", function() {
    round("rock");
});
playerPaper.addEventListener("click", function() {
    round("paper");
});
playerScissors.addEventListener("click", function() {
    round("scissors");
});

function compSelection() {
    let choices = ["rock", "paper", "scissors"];

    let compSelect = Math.floor(Math.random() * choices.length);
    return choices[compSelect];
} 

function win(playerChoice, compChoice) {
    playerScore++;
    console.log(playerChoice + " beats " + compChoice + ", you win!");
}

function lose(playerChoice, compChoice) {
    compScore++;
    console.log(compChoice + " beats " + playerChoice + ", you lose!");
}

function tie(playerChoice, compChoice) {
    console.log("Tie!");
}

function round(playerChoice) {
    let compChoice = compSelection();

    switch(playerChoice+compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie(playerChoice, compChoice);
            break;
    }
}
