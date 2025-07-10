"use strict";

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const CHOICES_COUNT = 3;


function getComputerChoice() {
    return Math.floor(Math.random() * CHOICES_COUNT) + 1;
}

function getHumanChoice() {
    let humanChoice;

    let choiceMade = false;
    while (!choiceMade) {
        humanChoice = prompt(
            "Rock, paper, or scissors? Make you choice.").trim().toLowerCase();

        if (humanChoice === "rock") {
            humanChoice = ROCK;
            choiceMade = true;
        } else if (humanChoice === "paper") {
            humanChoice = PAPER;
            choiceMade = true;
        } else if (humanChoice === "scissors") {
            humanChoice = SCISSORS;
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
        const win = "You win! ";
        const lose = "You lose! ";
        const paperRock = "Paper beats Rock.";
        const scissorsPaper = "Scissors beat Paper.";
        const rockScissors = "Rock beats Scissors.";
        
        let text;

        if (humanChoice === ROCK && computerChoice === PAPER) {
            text = lose + paperRock;
            computerScore++;
        } else if (humanChoice === PAPER && computerChoice === ROCK) {
            text = win + paperRock;
            humanScore++;
        } else if (humanChoice === PAPER && computerChoice === SCISSORS) {
            text = lose + scissorsPaper;
            computerScore++;
        } else if (humanChoice === SCISSORS && computerChoice === PAPER) {
            text = win + scissorsPaper;
            humanScore++;
        } else if (humanChoice === SCISSORS && computerChoice === ROCK) {
            text = lose + rockScissors;
            computerScore++;
        } else if (humanChoice === ROCK && computerChoice === SCISSORS) {
            text = win + rockScissors;
            humanScore++;
        } else {
            text = "It's a draw!";
        }

        return text;
    }
}

playGame();