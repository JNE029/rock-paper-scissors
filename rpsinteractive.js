let playerChoice;
let compChoice;

//fix compChoice return
function checkSelection() {
    const playerBtns = document.querySelectorAll("button");
    playerBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            let playerChoice = button.id; 
            //loads compChoice after the EventListener
            function compSelect() {
                let randomInt = Math.floor(Math.random() * Math.floor(3));
            
                if (randomInt === 1) {
                    let compChoice = "rock";
                } else if (randomInt === 2) {
                    let compChoice = "paper";
                } else {
                    let compChoice = "scissors";
                }
            } 
        });
    });
}

/*function checkSelection() {
    const playerBtns = document.querySelectorAll("button");
    playerBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            let playerChoice = button.id; 
            //loads compChoice after the EventListener
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
            console.log(playerChoice);
            console.log(compChoice());
        });
    });  
}
*/
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

    checkSelection();

}

checkSelection();