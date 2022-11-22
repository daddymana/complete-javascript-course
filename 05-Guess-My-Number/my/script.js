'use strict';

let secretNumber = Math.trunc( Math.random() * 20 ) + 1;
let highscore = 0;
let score = 20;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}


// "Check" Click handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {

    displayMessage('⛔ No number!');
  
  // Player win
  } else if (guess === secretNumber) {

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    
    displayMessage('🏆 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  
  // Player lose
  } else if (guess !== secretNumber) {

    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💀 You lost the game!')
      document.querySelector('.score').textContent = 0;
    }

  }
});

// "Again" Click handler
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc( Math.random() * 20 ) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '12rem';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});