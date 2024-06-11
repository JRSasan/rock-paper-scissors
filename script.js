let playerScore = 0;
let computerScore = 0; 
let gameRound = 0;
let roundResult = "";
let roundMessage = "";


const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const roundResultDisplay = document.querySelector(".round-result-display");
const roundMessageDisplay = document.querySelector(".round-message-display");
const choicesButtons = document.querySelectorAll(".choice-button");

choicesButtons.forEach((buttons) => {
    buttons.addEventListener("click", playGame);
})


function playGame(e) {
    
    let playerSelection = e.target.value;
    let computerSelection = getComputerChoice();


    updateChoiceDisplay(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);

    if (playerScore === 5 || computerScore === 5) {
        declareWinner(playerScore, computerScore);
    }
    
}


function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"]

    const choiceIndex = Math.floor(Math.random() * 3);

    const choice = choices[choiceIndex];

    return choice;
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        roundResult = "DRAW!";
        roundMessage = `${playerSelection} TIES WITH ${computerSelection}`;
    }

    if(playerSelection === "ROCK") {
        if(computerSelection === "PAPER") {
            roundResult = "YOU LOSE!"
            roundMessage = "PAPER BEATS ROCK";
            computerScore += 1;
        }
        else if(computerSelection === "SCISSORS"){
            roundResult = "YOU WIN!"
            roundMessage = "ROCK BEATS SCISSORS";
            playerScore += 1;
        }
    }
    else if(playerSelection === "PAPER") {
        if(computerSelection === "ROCK") {
            roundResult = "YOU WIN!"
            roundMessage = "PAPER BEATS ROCKS";
            playerScore += 1;
        }
        else if(computerSelection === "SCISSORS") {
            roundResult = "YOU LOSE!"
            roundMessage = "SCISSORS BEATS PAPER";
            computerScore += 1;
        }
    }
    else if(playerSelection === "SCISSORS") {
        if(computerSelection === "PAPER") {
            roundResult = "YOU WIN!"
            roundMessage = "SCISSORS BEATS PAPER";
            playerScore += 1;
        }
        else if(computerSelection === "ROCK") {
            roundResult = "YOU LOSE!"
            roundMessage = "ROCK BEATS SCISSORS";
            computerScore += 1;
        }
    }

    updateGameMessage(playerScore, computerScore, roundResult, roundMessage);
}

function updateChoiceDisplay(playerSelection, computerSelection) {
    
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;

}

function updateGameMessage(playerScore, computerScore, roundResult, roundMessage) {
    
    playerScoreDisplay.textContent = `PLAYER: ${playerScore}`;
    computerScoreDisplay.textContent = `COMPUTER: ${computerScore}`;

    roundResultDisplay.textContent = roundResult;
    roundMessageDisplay.textContent = roundMessage;
    
} 


function declareWinner(playerScore, computerScore) {
    if(playerScore === computerScore) {
        roundResult = "DRAW";
    } else if (playerScore > computerScore) {
        roundResult = "PLAYER WINS!";
    } else if (playerScore < computerScore) {
        roundResult = "COMPUTER WINS!";
    }

    roundResultDisplay.textContent = roundResult;
    roundMessageDisplay.textContent = " ";

    choicesButtons.forEach((button) => {button.disabled = true;});
}



