//Game of Rock Paper Scissors between a user and getComputerChoice

//Function to accept user choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }
    else 
      return 'Sorry, not a valid option.';
  }
  
  //Test user outputs
  //console.log(getUserChoice('Rock')); //returns rock
  //console.log(getUserChoice('pApEr')) //returns paper
  //console.log(getUserChoice('Fire')); //returns error message above
  
  //Function to generate a random number between 0-2 as the computer's choice
  function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3);
  if(randomNumber === 0){
    return 'rock';
  }else if(randomNumber === 1){
    return 'paper';
  }else 
    return 'scissors';
  }
  
  //Test computer output
  //console.log(getComputerChoice());
  
  //Function to determine with winner
  function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
      return 'The game was a tie!';
    }
    else if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
         return 'The computer has won!';
      } 
      else 
         return 'The user has won!';
  }
    else if (userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return 'The user has won!';
    }
      else
        return 'The computer has won!';
    }
      else if (userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'The computer has won!';
    }
      else
        return 'The user has won!';
  }
  else if (userChoice === 'bomb'){
    return 'The user has completely annhilated the opponent!'
  }
  else
    return 'Something is not quite right! Check user input again!'
  }
  
  //Function to play the game
  function playGame(){
    const userChoice = getUserChoice('bomb');
    console.log (userChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    return console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();