"use strict";

const CHOICES_COUNT = 3;

function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"];

    return choiceArray[Math.floor(Math.random() * CHOICES_COUNT)];
}

function getHumanChoice() {
    let humanChoice;

    let choiceMade = false;
    while (!choiceMade) {
        humanChoice = prompt(
            "Rock, paper, or scissors? Make you choice.").trim().toLowerCase();

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            choiceMade = true;
        } else {
            humanChoice = null;
        }
    }

    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);

        console.log(roundResult);
        console.log(humanScore + " : " + computerScore);

        if (roundResult === "It's a draw!") {
            i--;
        }
    }

    humanScore > computerScore ? 
        console.log("Congrats! You've won!") : 
        console.log("Sorry! You've lost.");

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a draw!";
        } else if ((humanChoice === "paper" && computerChoice === "rock") 
            || (humanChoice === "scissors" && computerChoice === "paper") 
            || (humanChoice === "rock" && computerChoice === "scissors")) {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }
}

playGame();