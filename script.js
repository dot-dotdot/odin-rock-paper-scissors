"use strict";

const CHOICES_COUNT = 3;

function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"];

    return choiceArray[Math.floor(Math.random() * CHOICES_COUNT)];
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const buttons = document.querySelector(".buttons");

    buttons.addEventListener("click", (event) => {
        let roundResult = playRound(event.target.id, getComputerChoice());
        console.log(roundResult);
        console.log(humanScore, computerScore);
    });

    // for (let i = 1; i <= 5; i++) {
    //     const computerChoice = getComputerChoice();
    //     const roundResult = playRound(humanChoice, computerChoice);

    //     console.log(roundResult);
    //     console.log(humanScore + " : " + computerScore);

    //     if (roundResult === "It's a draw!") {
    //         i--;
    //     }
    // }

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