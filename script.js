// Get computer choice
// Get user choice
// Check for who is the winner
// Increment the points of the winner
// Play the game until a player gets 3 points


function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"]

    const choiceIndex = Math.floor(Math.random() * 3);

    const choice = choices[choiceIndex];

    return choice;
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        return "DRAW!";
    }

    if(playerSelection === "ROCK") {
        if(computerSelection === "PAPER") {
            return "You Lose! Paper beats Rock";
        }
        else if(computerSelection === "SCISSORS"){
            return "You Win! Rock beats Scissors";
        }
    }
    else if(playerSelection === "PAPER") {
        if(computerSelection === "ROCK") {
            return "You Win! Paper beats Rock";
        }
        else if(computerSelection === "SCISSORS") {
            return "You Lose! Scissors beats Paper";
        }
    }
    else if(playerSelection === "SCISSORS") {
        if(computerSelection === "PAPER") {
            return "You Win! Scissors beats Paper";
        }
        else if(computerSelection === "ROCK") {
            return "You Lose! Rock beats Scissors";
        }
    }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));