'use strict';

// document.querySelector('.message').textContent = ' 😁 Correct Number ! ';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //document.querySelector('.message').textContent = '❌ No number!';
    displayMessage('❌ No number!');
  } //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '🥶 Too big' : '🙄 Too small';
      displayMessage(guess > secretNumber ? '🥶 Too big' : '🙄 Too small');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' 😹 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '🙄 Too small';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = ' 😹 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // When guess too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '🥶 Too big';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = ' 😹 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }}

  //     // When guess is correct
  else if (guess === secretNumber) {
    displayMessage('😁 Correct Number !');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('h1').textContent = 'The correct number is ';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(' Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('h1').textContent = 'Guess My Number! ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
