"use strict";

function getComputerChoice() {
    const ROCK = 1;
    const PAPER = 2;
    // const SCISSORS = 3;
    const CHOICES_COUNT = 3;
    
    let computerChoice = Math.floor(Math.random() * CHOICES_COUNT) + 1;

    if (computerChoice === ROCK) {
        return "rock";
    }
    
    if (computerChoice === PAPER) {
        return "paper"
    }

    return "scissors";
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

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    const win = "You win! ";
    const lose = "You lose! ";
    const paperRock = "Paper beats Rock.";
    const scissorsPaper = "Scissors beat Paper.";
    const rockScissors = "Rock beats Scissors.";
    
    let draw = false;

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(lose + paperRock);
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(win + paperRock);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(lose + scissorsPaper);
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(win + scissorsPaper);
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(lose + rockScissors);
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(win + rockScissors);
        humanScore++;
    } else {
        console.log("It's a draw!");
        draw = true;
    }

    return draw;
}

let humanScore = 0;
let computerScore = 0;
