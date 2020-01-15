//Player interaction 
const playerButtons = document.querySelectorAll("button");
playerButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        alert(button.id);
    });
});


//Computer interaction 
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


//Testing
console.log(compChoice());
console.log(playerButtons);
