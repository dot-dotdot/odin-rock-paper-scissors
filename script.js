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
