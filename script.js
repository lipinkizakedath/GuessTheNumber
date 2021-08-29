'use strict';
// const name = prompt('Your name');
const highscore = document.querySelector('.highscore');
const button = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const again = document.querySelector('.again');
const numberToGuess = document.querySelector('.number');
const score = document.querySelector('.score');

let number = randomNumberGenerator();
let maximumScore = 20;

button.addEventListener('click', () => {
  score.textContent = maximumScore;
  const input = Number(guess.value);

  if (input === number) {
    numberToGuess.textContent = number;
    message.textContent = '🎉Congratulations, its correct!';
    highscore.textContent =
      maximumScore > highscore.textContent
        ? maximumScore
        : highscore.textContent;
    document.querySelector('body').style.backgroundColor = '#148F77';
  }

  if (input > number) {
    inCorrectGuess('Gussed value is higher', 'orange');
  }

  if (input < number) {
    inCorrectGuess('Gussed value is lower', 'orange');
  }

  if (maximumScore < 0) {
    inCorrectGuess('You failed😒 try again', '#C0392B');
  }
});

function randomNumberGenerator() {
  return Math.ceil(Math.random() * 20);
}

again.addEventListener('click', () => {
  number = randomNumberGenerator();
  numberToGuess.textContent = '?';
  guess.value = '';
  maximumScore = 20;
  inCorrectGuess('Start guessing...', '#222');
});

function inCorrectGuess(msg, colorCode) {
  message.textContent = msg;
  document.querySelector('body').style.backgroundColor = colorCode;
  maximumScore--;
}
