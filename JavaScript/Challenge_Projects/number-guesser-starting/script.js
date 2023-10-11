let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    const randInt = (Math.floor(Math.Random() * 10)) 
}

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
    if(humanGuess == computerGuess){ 
        return true;  //if human an computer guess is the same human wins
    } else if ((Math.absolute (secretNumber - humanGuess)) > (Math.absolute(secretNumber - computerGuess))){
        return false;  //computer wins
    } else return true;  //human wins
}

const updateScore = winner => {
    winner? humanscore += 1 : computerscore += 1
}


