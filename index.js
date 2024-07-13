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

function compareChoices(cpuChoice, userInput) {

}

userName = prompt("What is your name")

alert(getUserInput())