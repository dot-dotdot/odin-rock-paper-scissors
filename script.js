"use strict";

const CHOICES_COUNT = 3;
const ROUNDS_TOTAL = 5;

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const buttonsDiv = document.querySelector(".buttons");

    buttonsDiv.addEventListener("click", function handleRound(event) {
        const roundResult = playRound(event.target.id, getComputerChoice());

        const roundResultDisplay = document.querySelector(".round-result");
        const resultContent = document.createElement("p"); 
        resultContent.textContent = roundResult;
        
        if (roundResultDisplay.children.length > 0) {
            roundResultDisplay.firstChild.replaceWith(resultContent);
        } else {
            roundResultDisplay.appendChild(resultContent);
        }

        console.log(humanScore, computerScore);

        if (humanScore === ROUNDS_TOTAL || computerScore === ROUNDS_TOTAL) {
            buttonsDiv.removeEventListener("click", handleRound);

            const buttons = document.querySelectorAll(".buttons > button");
            buttons.forEach(button => button.setAttribute("disabled", "true"));
            
            checkGameResult();
        }
    });

    function checkGameResult() {
        humanScore > computerScore ? 
            console.log("Congrats! You've won!") : 
            console.log("Sorry! You've lost.");
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a draw!";
        } else if ((humanChoice === "paper" && computerChoice === "rock") 
            || (humanChoice === "scissors" && computerChoice === "paper") 
            || (humanChoice === "rock" && computerChoice === "scissors")) {
            humanScore++;
            return `You win: ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            return `You lose: ${computerChoice} beats ${humanChoice}`;
        }
    }

    function getComputerChoice() {
        let choiceArray = ["rock", "paper", "scissors"];
        return choiceArray[Math.floor(Math.random() * CHOICES_COUNT)];
    }
}

playGame();