let computerSelection = function getComputerChoice() {
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

for (let i = 1; i<=10; i++) {
    console.log(computerSelection())
}

