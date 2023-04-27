const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result')
let score = 0;
let computerScore = 0;






buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        switch(playRound(rock.value, getComputerChoice())) {
                    case '0':
                        computerScore += 1
                        if (computerScore == 5) {
                            result.setAttribute('style', 'background-color: red; color: white');
                            result.textContent = 'You have lost the game! ';
                            computerScore == 0;
                            score = 0;
                            break;
                        };
                        result.textContent = 'You have lost! ';
                        console.log(computerScore, score)
                        break;



                    case '1':
                        score += 1
                        if (score == 5) {
                            result.setAttribute('style', 'background-color: green; color: white');
                            result.textContent = 'You have won the game! ';
                            computerScore == 0;
                            score = 0;
                            break;
                        };
                        result.textContent = 'You won! ';
                        
                        console.log(computerScore, score)
                        break;
                    case '2':
                        
                        if (computerScore == 5) {
                            result.setAttribute('style', 'background-color: red; color: white');
                            result.textContent = 'You have lost the game! ';
                            computerScore == 0;
                            score = 0;
                            break;
                        };
                        if (score == 5) {
                            result.setAttribute('style', 'background-color: green; color: white');
                            result.textContent = 'You have won the game! ';
                            computerScore == 0;
                            score = 0;
                            break;
                        };
                        
                        computerScore += 1;
                        score += 1;
                        result.textContent = "It's a tie! "
                        console.log(computerScore, score)
                        break;
                }
            })
    });
  



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
        return '0';
    }

    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper") {
        return '0';
    }

    else if (playerSelection.toUpperCase() == "SCISSOR" && computerSelection == "Rock") {
        return '0';
    }

    else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        return '2';
    }

    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock") {
        return '1';
    }

    else if (playerSelection.toUpperCase() == "SCISSOR" && computerSelection == "Paper") {
        return '1';
    }

    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissor") {
        return '1';
    }

}


    





















