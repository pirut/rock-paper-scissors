/*
Req's:
    - User Input stored as "let userInput"
    - CPU choice stored as "let cpuChoice"
    - Compare Choices
    - Count Wins and Losses
    - Detect Victory condition
*/

let userName = "";

function getUserInput() {
    let userInput = prompt(`What do you play ${userName}?`)
    if (userInput === null || undefined || "") {
        return getUserInput();
    }
    else {
        userInput = userInput.toLowerCase();
        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            return userInput;
        }
        else {
            return getUserInput();
        }
    }
}

function getCpuInput () {
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
    switch (cpuInput, userInput) {
        case cpuInput === userInput:
            return "tie";
        case cpuInput === "rock" && userInput === "scissors":
            return "lose";
        case cpuInput === "paper" && userInput === "rock":
            return "lose";
        case cpuInput === "scissors" && userInput === "paper":
            return "loase";
        default:
            return "win";
    }
}

userName = prompt("What is your name")

alert(getUserInput())