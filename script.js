let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = (min=0, max=9) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  userGuess = Math.abs(userGuess - targetNumber);
  computerGuess = Math.abs(computerGuess - targetNumber);
  if (userGuess < computerGuess || userGuess === computerGuess) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};