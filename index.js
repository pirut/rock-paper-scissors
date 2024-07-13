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

function runGame() {
    let cpuScore = 0;
    let playerScore = 0;

    while (playerScore < 5 && cpuScore < 5) {
        let result = compareChoices(getUserInput(), getCpuInput());

        switch (result) {
            case result === "tie":
                alert("We Tied.");
                continue;
            case result === "lose":
                alert("I Lost That Round.");
                cpuScore++;
                continue;
            case result === "win":
                alert(`You Win That Round ${userName}.`);
                playerScore++;
                continue;
        }
    }

    if (cpuScore === 5) {
        alert("You lose Ha!");
    }
    else {
        alert("You got lucky 😢");
    }
}

userName = prompt("What is your name")
alert(`I chalance you to a game of Rock Paper Scissors ${userName}.`);
alert("TO THE DEATH!!");
alert("Well not actually to the death, but it is for realzies.");

alert(getUserInput())