//Computer interaction 
//fix randomInt -> referenceError lexical 
function compChoice() {
    let randomInt = Math.floor(Math.random() * Math.floor(3));

    if (randomInt === 1) {
        return "rock";
    } else if (randomInt === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Player interaction 
let playerChoice;

const playerBtns = document.querySelectorAll("button");
playerBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        alert(button.id);
    });
});

//Actual game
/*function roundWinner() {
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
}*/

//Testing
console.log(compChoice());
console.log(playerChoice);
