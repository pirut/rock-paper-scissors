/*
Req's:
    - User Input stored as "let userInput"
    - CPU choice stored as "let cpuChoice"
    - Compare Choices
    - Count Wins and Losses
    - Detect Victory condition
*/

function getUserInput() {
    let userInput = prompt(`What do you play ${userName}?`);
    if (userInput === null || undefined || "") {
        return getUserInput();
    } else {
        userInput = userInput.toLowerCase();
        if (
            userInput === "rock" ||
            userInput === "paper" ||
            userInput === "scissors"
        ) {
            return userInput;
        } else {
            alert("You can only play Rock, Paper, or Scissors.");
            return getUserInput();
        }
    }
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

function runGame() {
    let cpuScore = 0;
    let playerScore = 0;

    while (playerScore < 5 && cpuScore < 5) {
        const userInput = getUserInput();
        const cpuInput = getCpuInput();
        let result = compareChoices(cpuInput, userInput);

        switch (result) {
            case "tie":
                alert("We Tied.");
                continue;
            case "lose":
                cpuScore++;
                alert(
                    `I Won That Round. I have ${cpuScore} points, and you have ${playerScore} Points.`
                );
                continue;
            case "win":
                playerScore++;
                alert(
                    `You Win That Round ${userName}. I have ${cpuScore} points, and you have ${playerScore} Points.`
                );
                continue;
            default:
                alert("There was a glitch. Let's try again.");
                continue;
        }
    }

    if (cpuScore === 5) {
        alert("You lose Ha!");
    } else {
        alert("You got lucky 😢");
    }
}

let userName = prompt("What is your name");
alert(`I challenge you to a game of Rock Paper Scissors ${userName}.`);
alert("TO THE DEATH!!");
alert("Well not actually to the death, but it is for realzies.");
alert("First to 5 wins.");
runGame();
