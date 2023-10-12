let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
    if(humanGuess == computerGuess){ 
        return true;  //if human and computer guess is the same human wins
    } else if ((getAbsoluteDistance(secretNumber, humanGuess)) > (getAbsoluteDistance(secretNumber, computerGuess))){
        return false;  //computer wins
    } else return true;  //human wins
}

const updateScore = winner => {
    winner? humanScore += 1 : computerScore += 1;
}

const advanceRound = () => {
    currentRoundNumber += 1;
}


