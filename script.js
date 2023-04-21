function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissor";
            break;
        default:
            return "Erreur";
            break;
    }

}

function playRound(playerSelection, computerSelection) {
    

    if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Scissor") {
        let isGameWon = 0;
        return `You lose! ${computerSelection} beats ${playerSelection} `;
    }

    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper") {
        let isGameWon = 0;
        return `You lose! ${computerSelection} beats ${playerSelection} `;
        
    }

    else if (playerSelection.toUpperCase() == "SCISSOR" && computerSelection == "Rock") {
        let isGameWon = 0;
        return `You lose! ${computerSelection} beats ${playerSelection} `;
    }

    else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        let isGameWon = 2;
        return `It's a tie! `;
    }

    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock") {
        let isGameWon = 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    else if (playerSelection.toUpperCase() == "SCISSOR" && computerSelection == "Paper") {
        let isGameWon = 1;
        return `You win! ${playerSelection} beats ${computerSelection} `;
    }

    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissor") {
        let isGameWon = 1;
        return `You win! ${playerSelection} beats ${computerSelection} `;
    }

}

function game(playRound) {
    let winCounter = 0;
    let loseCounter = 0;
    for (let i = 1; i<=5; i++) {
        let playerSelection = prompt("What's your choice? (Rock, Paper, Scissor)? ");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        switch (isGameWon) {
            case 0:
                loseCounter += 1;
            case 1:
                winCounter += 1;
            case 2:
                loseCounter += 1;
                winCounter += 1;

            default:
                console.log("Error")
        }
        
    }

    if (winCounter > loseCounter) {
        return(`You won the game! `)
    }
    else if (winCounter < loseCounter) {
        return(`You lost the game! `)
    }
}


