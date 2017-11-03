const input = document.getElementById('num-input')
const guessBtn = document.getElementById('guess-btn');
const guessSpan = document.getElementById('guess');
const highlowok = document.getElementById('highlowok');
const resetBtn = document.getElementById('reset-btn');

const generateRandom = () => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var min = 0;
var max = 100;
var randomNum = generateRandom();
console.log(randomNum);

const reset = () => {
  guessSpan.innerHTML = '--';
  randomNum = generateRandom();
}

const compareGuess = () => {
  let guess = document.getElementById('num-input').value;
  guessSpan.innerHTML = guess;

  if(guess > randomNum){
    highlowok.innerHTML = 'THAT IS TOO HIGH!'
  } else if(guess < randomNum) {
    highlowok.innerHTML = 'THAT IS TOO LOW!'
  } else {
    highlowok.innerHTML = 'DING! DING! DING! CORRECT!'
  }
}

guessBtn.addEventListener('click', compareGuess);
resetBtn.addEventListener('click', reset);
