"use strict";

const CHOICES_COUNT = 3;
const ROUNDS_TOTAL = 5;

const buttonsContainer = document.querySelector(".buttons");

const roundResultDisplay = document.querySelector(".round-result");
const resultContent = document.createElement("p"); 
roundResultDisplay.appendChild(resultContent);

const scoreDisplay = document.querySelector(".score");
const scoreContent = document.createElement("p");
scoreDisplay.appendChild(scoreContent);

const restartButton = document.querySelector("#restart-button");
restartButton.hidden = true;
restartButton.addEventListener("click", () => {
    window.location.reload();
});

playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    buttonsContainer.addEventListener("click", function handleRound(event) {
        if (event.target.tagName === "BUTTON") {
            const playerChoice = event.target.id;
            const roundResult = playRound(playerChoice, getComputerChoice());
            resultContent.textContent = roundResult;
            scoreContent.textContent = `${humanScore} : ${computerScore}`;
            
            if (humanScore === ROUNDS_TOTAL || computerScore === ROUNDS_TOTAL) {
                buttonsContainer.removeEventListener("click", handleRound);
                
                const buttons = document.querySelectorAll(".buttons > button");
                buttons.forEach(button => button.setAttribute("disabled", "true"));
                
                const endMessage = document.createElement("p");
                endMessage.textContent = getFinalMessage();
                document.querySelector(".end-message").appendChild(endMessage);

                restartButton.removeAttribute("hidden");
            }
        }
    });
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a draw!";
        } else if ((humanChoice === "paper" && computerChoice === "rock") 
            || (humanChoice === "scissors" && computerChoice === "paper") 
            || (humanChoice === "rock" && computerChoice === "scissors")) {
            humanScore++;
            return `You win: ${humanChoice} beats ${computerChoice}.`;
        } else {
            computerScore++;
            return `You lose: ${computerChoice} beats ${humanChoice}.`;
        }
    }

    function getComputerChoice() {
        let choiceArray = ["rock", "paper", "scissors"];
        return choiceArray[Math.floor(Math.random() * CHOICES_COUNT)];
    }
    
    function getFinalMessage() {
        return humanScore > computerScore ? 
            "Congrats! You've won!" : 
            "Sorry! You've lost.";
    }
}
