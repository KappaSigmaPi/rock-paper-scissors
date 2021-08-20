function randomRockPaperScissors() {
    let value = Math.floor(Math.random() * 3);

    if (value == 0) {
        return "rock";
    } else 
    if (value == 1) {
        return "scissors";
    } else {
        return "paper";
    }
}

function computerPlay() {
    return randomRockPaperScissors();
}

function playerDeclaration() {
    let pick = prompt("Paper, Rock or Scissors !");
    pick = pick.toLocaleLowerCase();

    if (pick == "paper") return "paper";
    else if (pick == "rock") return "rock";
    else if (pick == "scissors") return "scissors";
    else {
        alert("Wrong pick, try again !");
        return playerDeclaration();
    }
}

function roundRockPaperScissors(playerSelection, computerSelection) {   
    if (playerSelection == "paper") {
        if (computerSelection == "paper")     return 0;
        else if (computerSelection == "rock") return 2;
        else                                  return 1;
    } else 
    if (playerSelection == "rock") {
        if (computerSelection == "rock")       return 0;
        else if (computerSelection == "paper") return 2;
        else                                   return 1;
    }
    else {  // Player selection is paper
        if (computerSelection == "paper")         return 0;
        else if (computerSelection == "scissors") return 2;
        else                                      return 1;
    }    
}

function showResults (humanScore, computerScore) {
    console.log(`Youre score is ${humanScore}\nComputer score is ${computerScore}`);
}

function game() {
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore != 5 && computerScore != 5) {
        let humanChoice = playerDeclaration();
        let computerChoice = computerPlay();

        let roundResult = roundRockPaperScissors(humanChoice, computerChoice);

        if (roundResult == 0) {
            console.log("Round drawn");
            showResults(humanScore, computerScore);
        }
        if (roundResult == 1) {
            console.log("Round won");
            humanScore++;
            showResults(humanScore, computerScore);
        }
        if (roundResult == 2) {
            console.log("Round lost");
            computerScore++;
            showResults(humanScore, computerScore);
        }

    }
    if (humanScore == 5) {
        console.log("You won !");
    } else {
        console.log("You lost !");
    }
}