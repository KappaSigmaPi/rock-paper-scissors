setPointsWhite();

let game = {
    humanScore : 0,
    computerScore : 0,

    playRound(humanChoice, computerChoice) {
        if(humanChoice == computerChoice) {
            roundDrawn();
        }
        if(humanChoice == "paper") {
            if(computerChoice == "rock") {
                roundWon();
            }
            if(computerChoice == "scissors") {
                roundLost();
            }
        }
        if(humanChoice == "rock") {
            if(computerChoice == "scissors") {
                roundWon();
            }
            if(computerChoice == "paper") {
                roundLost();
            }
        }
        if(humanChoice == "scissors") {
            if(computerChoice == "paper") {
                roundWon();
            }
            if(computerChoice == "rock") {
                roundLost();
            }
        }
    }
}


function roundDrawn() {
    console.log("draw");
} 
function roundLost() {
    console.log("lost");
    let points = game.computerScore;
    console.log(points);
    game.computerScore++;
    if(points == 4) {
        point5Computer.style.backgroundColor = 'black';
        alert("You Lost the Game!");
    }
    if(points == 3) {
        point4Computer.style.backgroundColor = 'black';
    }
    if(points == 2) {
        point3Computer.style.backgroundColor = 'black';
    }
    if(points == 1) {
        point2Computer.style.backgroundColor = 'black';
    }
    if(points == 0) {
        point1Computer.style.backgroundColor = 'black';
    }
}
function roundWon() {
    console.log("won");
    let points = game.humanScore;
    game.humanScore++;
    if(points == 4) {
        point5Human.style.backgroundColor = 'black';
        alert("You Won the Game");
    }
    if(points == 3) {
        point4Human.style.backgroundColor = 'black';
    }
    if(points == 2) {
        point3Human.style.backgroundColor = 'black';
    }
    if(points == 1) {
        point2Human.style.backgroundColor = 'black';
    }
    if(points == 0) {
        point1Human.style.backgroundColor = 'black';
    }
}
function setPointsWhite() {
    let points = document.querySelectorAll('.point');

    points.forEach(point => {
        point.style.backgroundColor = 'white';
    });
}
const point1Human = document.querySelector('#point1Human');
const point2Human = document.querySelector('#point2Human');
const point3Human = document.querySelector('#point3Human');
const point4Human = document.querySelector('#point4Human');
const point5Human = document.querySelector('#point5Human');

const point1Computer = document.querySelector('#point1Computer');
const point2Computer = document.querySelector('#point2Computer');
const point3Computer = document.querySelector('#point3Computer');
const point4Computer = document.querySelector('#point4Computer');
const point5Computer = document.querySelector('#point5Computer');

const selectionButtons = document.querySelectorAll('.selectionButton');

    selectionButtons.forEach(selectionButton => {
        selectionButton.addEventListener('click', () => {
            game.playRound(selectionButton.id, computerPlay());
            if(selectionButton.id == 'rock') {
                humanChoiceImage.innerHTML = '';
                humanChoiceImage.appendChild(rockImage);
            }
            if(selectionButton.id == 'paper') {
                humanChoiceImage.innerHTML = '';
                humanChoiceImage.appendChild(paperImage);
            }
            if(selectionButton.id == 'scissors') {
                humanChoiceImage.innerHTML = '';
                humanChoiceImage.appendChild(scissorsImage);
            }
        });
    });

const newGameButton = document.querySelector('#new-game');
newGameButton.addEventListener('click', () => {
    game.humanScore = 0;
    game.computerScore =0;
    setPointsWhite();
    humanChoiceImage.innerHTML = '';
    computerChoiceImage.innerHTML = '';
});

const paperImage = new Image();
paperImage.src = 'images/paper.png';
const rockImage = new Image();
rockImage.src = 'images/rock.png';
const scissorsImage = new Image();
scissorsImage.src = 'images/scissors.png';

// Adding same image aparently dosn't work,
// so i'm adding same img but with different variable

const paperImageBot = new Image();
paperImageBot.src = 'images/paper.png';
const rockImageBot = new Image();
rockImageBot.src = 'images/rock.png';
const scissorsImageBot = new Image();
scissorsImageBot.src = 'images/scissors.png';

const humanChoiceImage = document.querySelector('.selected-item-human');
const computerChoiceImage = document.querySelector('.selected-item-computer');

function computerPlay() {
    let value = Math.floor(Math.random() * 3);

    if (value == 0) {
        computerChoiceImage.innerHTML = '';
        computerChoiceImage.appendChild(rockImageBot);
        return "rock";
    } else 
    if (value == 1) {
        computerChoiceImage.innerHTML = '';
        computerChoiceImage.appendChild(scissorsImageBot);
        return "scissors";
    } else {
        computerChoiceImage.innerHTML = '';
        computerChoiceImage.appendChild(paperImageBot);
        return "paper";
    }
}