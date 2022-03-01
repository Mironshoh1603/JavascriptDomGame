'use strict';

function randomFunc() {
  let randomNum = Math.trunc(Math.random() * 6) + 1;
  return randomNum;
}

let swapNum = 1;
let score = Number(
  document.querySelector(`#current--${(swapNum + 1) % 2}`).textContent
);

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
function holdFunc() {
  let playerOneScore = Number(
    document.querySelector(`#score--${(swapNum + 1) % 2}`).textContent
  );
  playerOneScore += score;
  score = 0;

  document.querySelector(`#score--${(swapNum + 1) % 2}`).textContent =
    playerOneScore;
  document
    .querySelector(`.player--${swapNum % 2}`)
    .classList.add('player--active');
  document
    .querySelector(`.player--${(swapNum + 1) % 2}`)
    .classList.remove('player--active');
  swapNum++;
  const nodeList = document.querySelectorAll('.current-score');
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].textContent = score;
  }

  if (playerOneScore > 99) {
    document.querySelector(`.player--${swapNum % 2}`).style.backgroundColor =
      '#07c707';
    document.querySelector(
      `.player--${(swapNum + 1) % 2}`
    ).style.backgroundColor = '#fc3737f6';
    let btnList = document.querySelectorAll('.btn');
    for (let i = 0; i < btnList.length; i++) {
      btnList[i].disabled = true;
    }
    document.querySelector('.btn--new').disabled = false;
  }
}

document.querySelector('.btn--hold').addEventListener('click', function () {
  holdFunc();
});
