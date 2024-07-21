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

const cpuScoreElement = document.querySelector("#cpuScore");
const playerScoreElement = document.querySelector("#playerScore");

const talkBack = document.querySelector(".talkBack");

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
            talkBack.textContent = "We Tied.";
            break;
        case "lose":
            cpuScore++;
            talkBack.textContent = "CPU Wins";
            break;
        case "win":
            playerScore++;
            talkBack.textContent = "You Win";
            break;
        default:
            talkBack.textContent = "There was a glitch. Let's try again.";
            break;
    }

    cpuScoreElement.textContent = String(cpuScore);
    playerScoreElement.textContent = String(playerScore);

    if (cpuScore === 5) {
        talkBack.textContent = "You lose Ha! Let's play again!";
        playerScore = 0;
        cpuScore = 0;
        cpuScoreElement.textContent = String(cpuScore);
        playerScoreElement.textContent = String(playerScore);
    } else if (playerScore === 5) {
        talkBack.textContent = "You got lucky 😢. Let's play again";
        playerScore = 0;
        cpuScore = 0;
        cpuScoreElement.textContent = String(cpuScore);
        playerScoreElement.textContent = String(playerScore);
    }
}
