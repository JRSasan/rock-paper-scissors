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

    let playerScore = 0;
    let computerScore = 0; 
    let roundMessage = "";


    if(playerSelection === computerSelection) {
        roundMessage = "DRAW!";
    }

    if(playerSelection === "ROCK") {
        if(computerSelection === "PAPER") {
            roundMessage = "You Lose! Paper beats Rock";
            computerScore += 1;
        }
        else if(computerSelection === "SCISSORS"){
            roundMessage = "You Win! Rock beats Scissors";
            playerScore += 1;
        }
    }
    else if(playerSelection === "PAPER") {
        if(computerSelection === "ROCK") {
            roundMessage = "You Win! Paper beats Rock";
            playerScore += 1;
        }
        else if(computerSelection === "SCISSORS") {
            roundMessage = "You Lose! Scissors beats Paper";
            computerScore += 1;
        }
    }
    else if(playerSelection === "SCISSORS") {
        if(computerSelection === "PAPER") {
            roundMessage = "You Win! Scissors beats Paper";
            playerScore += 1;
        }
        else if(computerSelection === "ROCK") {
            roundMessage = "You Lose! Rock beats Scissors";
            computerScore += 1;
        }
    }

    updateGameMessage(playerScore, computerScore, roundMessage);
}

function updateGameMessage(playerScore, computerScore, roundMessage) {
    alert(`Player Score: ${playerScore} Computer Score: ${computerScore}\n${roundMessage}`);
} 


/*

PLAY GAME LOGIC

Call playGame()
Get user selection
Call playRound()
Display roundMessage and score
Call playRound() until gameRound is less than or equal to 5


*/
function playGame() {
    
    let gameRound = 0;

    while (gameRound <= 5){
    let playerSelection = prompt("Please enter your choice: ");
    let computerSelection = getComputerChoice();

    playerSelection = playerSelection.toUpperCase();

    playRound(playerSelection, computerSelection);

    gameRound++;
    }
    
}

playGame();
