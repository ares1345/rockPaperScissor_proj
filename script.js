const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result')

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        switch(playRound(rock.value, getComputerChoice())) {
                    case '0':
                        result.textContent = 'You have lost! ';
                        break;
                    case '1':
                        result.textContent = 'You won! ';
                        break;
                    case '2':
                        result.textContent = 'Its a tie! '
                        break;


                }
            })
    });
  




// const rock = document.querySelector('.rock');
// const paper = document.querySelector('.paper');
// const scissor = document.querySelector('.scissor');
// const result = document.querySelector('.result')

// rock.addEventListener('click', () => {
//     switch(playRound(rock.value, getComputerChoice())) {
//         case '0':
//             result.textContent = 'You have lost! '
//             break;
//         case '1':
//             result.te

//     }
// })

// paper.addEventListener('click', () => {
//     console.log(playRound(paper.value, getComputerChoice()))
// })

// scissor.addEventListener('click', () => {
//     console.log(playRound(scissor.value, getComputerChoice()))
// })


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

function game(playRound) {
    let winCounter = 0;
    let loseCounter = 0;
    let isGameWon = 0;
    


















































































    /* for (let i = 1; i<=5; i++) {
        let playerSelection = prompt("What's your choice? (Rock, Paper, Scissor)? ");
        let computerSelection = getComputerChoice();


        result = playRound(playerSelection, computerSelection)
        // console.log(playRound(playerSelection, computerSelection))
        switch (result) {
            case '0':
                loseCounter++;
                console.log(`You lose! ${computerSelection} beats ${playerSelection} `);
                break;

            case '1':
                winCounter++;
                console.log(`You win! ${playerSelection} beats ${computerSelection} `);
                break;

            case '2':
                loseCounter++;
                winCounter++;
                console.log(`It's a tie! `);
                break;

            default:
                console.log("Error");
                break;
        }


        console.log(`Your win count is ${winCounter}`);
        console.log(`Your lose count is ${loseCounter}`);
        
    } */


    
    if (winCounter > loseCounter) {
        return(`You won the game! `)
    }
    else if (winCounter < loseCounter) {
        return(`You lost the game! `)
    }
}

console.log(game(playRound))



// `You lose! ${computerSelection} beats ${playerSelection} `;
//  `It's a tie! `;
// `You win! ${playerSelection} beats ${computerSelection} `;
