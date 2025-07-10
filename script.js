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
