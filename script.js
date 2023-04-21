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
        return `You lose! ${computerSelection} beats ${playerSelection} `;
    }

    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper") {
        return `You lose! ${computerSelection} beats ${playerSelection} `;
    }

    else if (playerSelection.toUpperCase() == "SCISSOR" && computerSelection == "Rock") {
        return `You lose! ${computerSelection} beats ${playerSelection} `;
    }

    else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        return `It's a tie! `;
    }

    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    else if (playerSelection.toUpperCase() == "SCISSOR" && computerSelection == "Paper") {
        return `You win! ${playerSelection} beats ${computerSelection} `;
    }

    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissor") {
        return `You win! ${playerSelection} beats ${computerSelection} `;
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


