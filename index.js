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
    userName = prompt("What is your name")
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

function compareChoices(cpuChoice, userInput) {

}

alert(getUserInput())