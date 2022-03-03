'use strict';

// Random function start
function randomFunc() {
  let randomNum = Math.trunc(Math.random() * 6) + 1;
  return randomNum;
}
// Random function finish

let swapNum = 1;
let score = Number(
  document.querySelector(`#current--${(swapNum + 1) % 2}`).textContent
);

// Roll button click start
document.querySelector('.btn--roll').addEventListener('click', function () {
  let nowRandom = randomFunc();

  document.querySelector('.dice').src = `dice-${nowRandom}.png`;
  if (nowRandom === 1) {
    score = 0;
    holdFunc();
  } else {
    score += nowRandom;
  }
  document.querySelector(`#current--${(swapNum + 1) % 2}`).textContent = score;
});
// Roll button click start

// Hold function start
function holdFunc() {
  let playerOneScore = Number(
    document.querySelector(`#score--${(swapNum + 1) % 2}`).textContent
  );
  playerOneScore += score;
  score = 0;

  document.querySelector(`#score--${(swapNum + 1) % 2}`).textContent =
    playerOneScore;

  const nodeList = document.querySelectorAll('.current-score');
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].textContent = score;
  }

  if (playerOneScore > 99) {
    document
      .querySelector(`.player--${(swapNum + 1) % 2}`)
      .classList.add('backgreen');
    document.querySelector(`.player--${swapNum % 2}`).classList.add('backred');
    let btnList = document.querySelectorAll('.btn');
    for (let i = 0; i < btnList.length; i++) {
      btnList[i].disabled = true;
    }
    document.querySelector('.btn--new').disabled = false;
  } else {
    document
      .querySelector(`.player--${swapNum % 2}`)
      .classList.remove('backgreen');
    document
      .querySelector(`.player--${(swapNum + 1) % 2}`)
      .classList.remove('backred');
    document
      .querySelector(`.player--${swapNum % 2}`)
      .classList.remove('backred');
    document
      .querySelector(`.player--${(swapNum + 1) % 2}`)
      .classList.remove('backgreen');
    console.log('Hello1');
    document
      .querySelector(`.player--${swapNum % 2}`)
      .classList.add('player--active');
    document
      .querySelector(`.player--${(swapNum + 1) % 2}`)
      .classList.remove('player--active');
    swapNum++;
  }
}
// Hold function finish

// Hold button click start
document.querySelector('.btn--hold').addEventListener('click', function () {
  holdFunc();
});
// Hold button click finish

// New button click start
document.querySelector('.btn--new').addEventListener('click', function () {
  let btnList = document.querySelectorAll('.btn');
  for (let i = 0; i < btnList.length; i++) {
    btnList[i].disabled = false;
  }
  let scoreList = document.querySelectorAll('.score');
  for (let i = 0; i < scoreList.length; i++) {
    scoreList[i].textContent = '0';
  }
  let currentList = document.querySelectorAll('.current-score');
  for (let i = 0; i < currentList.length; i++) {
    currentList[i].textContent = '0';
  }
  document.querySelector('.dice').src = `dice-5.png`;
  swapNum = 0;
  holdFunc();
});
// New button click finish
