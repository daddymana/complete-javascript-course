'use strict';

let secretNumber = Math.trunc( Math.random() * 20 ) + 1;
let highscore = 0;
let score = 20;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

// "Check" Click handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {

    document.querySelector('.message').textContent = '⛔ No number!'
  
  // Player win
  } else if (guess === secretNumber) {

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    
    document.querySelector('.message').textContent = '🏆 Correct number!'
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  
  // Number too hight
  } else if (guess > secretNumber) {
  
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '📈 Too high!'
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You lost the game!'
      document.querySelector('.score').textContent = 0;
    }
  
  // Number too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '📉 Too low!'
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You lost the game!'
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
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});