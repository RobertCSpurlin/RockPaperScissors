let userInput = "Bomb" //users Choice
userInput = userInput.toLowerCase();

//verifys user input
const getUserChoice = userInput => {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'Bomb') {
     return userInput;
  } else { 
    console.log('Error Please Select Rock, Paper, or Scissors')
  }
  };

//Randomly get Computer Choice
function getComputerChoice(){
  switch (Math.floor(Math.random(0) * 3)) {
  case 0:
  return 'rock';
  break;
  case 1:
  return 'paper';
  break;
  case 2:
  return "scissors"
  break;
  }
}
let computerChoice = getComputerChoice();
function determineWinner(userChoice, computerChoice){
if(userChoice === computerChoice) {
  return 'The Game was a Tie!'
} else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return `${computerChoice} beats ${userChoice}, The Computer Won that Round!`
    } else {
      return `${userChoice} beats ${computerChoice}, You Won that Round!`
    }
} else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return `${computerChoice} beats ${userChoice}, The Computer Won that Round!`
    } else {
      return `${userChoice} beats ${computerChoice}, You Won that Round!`
    }
} else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return `${computerChoice} beats ${userChoice}, The Computer Won that Round!`
    } else {
      return `${userChoice} beats ${computerChoice}, You Won that Round!`
    }
} else if (userChoice === 'bomb') {
      return `You Won that Round!`
    }


}


console.log(determineWinner(userInput, computerChoice))
