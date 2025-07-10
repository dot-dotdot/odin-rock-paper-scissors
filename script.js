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
        humanChoice = prompt("Rock, paper, or scissors? Make you choice.").trim().toLowerCase();

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            choiceMade = true;
        } else {
            humanChoice = null;
        }
    }

    if (humanChoice === "rock") return ROCK;
    if (humanChoice === "paper") return PAPER;
    return SCISSORS;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const win = "You win! ";
        const lose = "You lose! ";
        const paperRock = "Paper beats Rock.";
        const scissorsPaper = "Scissors beat Paper.";
        const rockScissors = "Rock beats Scissors.";
        
        let draw = false;

        if (humanChoice === ROCK && computerChoice === PAPER) {
            console.log(lose + paperRock);
            computerScore++;
        } else if (humanChoice === PAPER && computerChoice === ROCK) {
            console.log(win + paperRock);
            humanScore++;
        } else if (humanChoice === PAPER && computerChoice === SCISSORS) {
            console.log(lose + scissorsPaper);
            computerScore++;
        } else if (humanChoice === SCISSORS && computerChoice === PAPER) {
            console.log(win + scissorsPaper);
            humanScore++;
        } else if (humanChoice === SCISSORS && computerChoice === ROCK) {
            console.log(lose + rockScissors);
            computerScore++;
        } else if (humanChoice === ROCK && computerChoice === SCISSORS) {
            console.log(win + rockScissors);
            humanScore++;
        } else {
            console.log("It's a draw!");
            draw = true;
        }

        return draw;
    }
}
