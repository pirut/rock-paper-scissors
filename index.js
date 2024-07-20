/*
Req's:
    - User Input stored as "let userInput"
    - CPU choice stored as "let cpuChoice"
    - Compare Choices
    - Count Wins and Losses
    - Detect Victory condition
*/

let cpuScore = 0;
let playerScore = 0;

const buttons = document.querySelector(".choices");
buttons.addEventListener("click", (event) => {
    getUserInput(event.target);
});

function getUserInput(button) {
    // alert(button.id);
    runGame(button.id);
}

function getCpuInput() {
    let randomInt = Math.floor(Math.random() * 3);

    switch (randomInt) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function compareChoices(cpuInput, userInput) {
    switch (true) {
        case cpuInput === userInput:
            return "tie";
        case cpuInput === "rock" && userInput === "scissors":
            return "lose";
        case cpuInput === "paper" && userInput === "rock":
            return "lose";
        case cpuInput === "scissors" && userInput === "paper":
            return "lose";
        default:
            return "win";
    }
}

function runGame(userInput) {
    let result = compareChoices(getCpuInput(), userInput);

    switch (result) {
        case "tie":
            alert("We Tied.");
            break;
        case "lose":
            cpuScore++;
            alert(`Cpu Win`);
            break;
        case "win":
            playerScore++;
            alert(`You win`);
            break;
        default:
            alert("There was a glitch. Let's try again.");
            break;
    }

    if (cpuScore === 5) {
        alert("You lose Ha!");
    } else if (playerScore === 5) {
        alert("You got lucky 😢");
    }
}

/* let userName = prompt("What is your name");
alert(`I challenge you to a game of Rock Paper Scissors ${userName}.`);
alert("TO THE DEATH!!");
alert("Well not actually to the death, but it is for realzies.");
alert("First to 5 wins."); 
runGame(); */
