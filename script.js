"use strict";

const CHOICES_COUNT = 3;
const ROUNDS_TOTAL = 5;
let gameFinished = true;

const buttonsContainer = document.querySelector(".buttons");

const roundResultDisplay = document.querySelector(".round-result");
const resultContent = document.createElement("p"); 
roundResultDisplay.appendChild(resultContent);

const scoreDisplay = document.querySelector(".score");
const scoreContent = document.createElement("p");
scoreDisplay.appendChild(scoreContent);


function playGame() {
    gameFinished = false;
    let humanScore = 0;
    let computerScore = 0;
    
    buttonsContainer.addEventListener("click", function handleRound(event) {
        const roundResult = playRound(event.target.id, getComputerChoice());
        resultContent.textContent = roundResult;
        scoreContent.textContent = `${humanScore} : ${computerScore}`;

        if (humanScore === ROUNDS_TOTAL || computerScore === ROUNDS_TOTAL) {
            buttonsContainer.removeEventListener("click", handleRound);

            const buttons = document.querySelectorAll(".buttons > button");
            buttons.forEach(button => button.setAttribute("disabled", "true"));
            
            const endMessage = document.createElement("p");
            endMessage.textContent = checkGameResult();
            document.querySelector("body").appendChild(endMessage);

            gameFinished = true;
        }
    });

    function checkGameResult() {
        return humanScore > computerScore ? 
            "Congrats! You've won!" : 
            "Sorry! You've lost.";
    }

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
}

playGame();

function restartGame() {

}