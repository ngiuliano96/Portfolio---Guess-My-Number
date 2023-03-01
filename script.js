'use strict';

//& Game variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//& Function for display updates
const displayContent = function (type, content) {
  document.querySelector(type).textContent = content;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //& When no input or invalid input
  if (!guess || guess < 0 || guess > 20) {
    displayContent('.message', '⛔ Invalid!');

    //& When guess is correct
  } else if (guess === secretNumber) {
    displayContent('.message', '🎉 Correct Number!');
    displayContent('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = 'var(--clr-special)';
    document.querySelector('.number').style.width = '20rem';

    if (score > highscore) {
      highscore = score;
      displayContent('.highscore', highscore);
    }

    //& When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayContent(
        '.message',
        guess > secretNumber ? '📈 Too high!' : `📉 Too low!`
      );

      score--;
      displayContent('.score', score);
    } else {
      displayContent('.message', '💥 You lost the game!');

      score = 0;
      displayContent('.score', score);
    }
  }
});

//& Reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';

  displayContent('.number', '?');
  displayContent('.message', 'Start guessing...');
  displayContent('.score', score);

  document.querySelector('body').style.backgroundColor = 'var(--clr-dark)';
  document.querySelector('.number').style.width = '10rem';
});
