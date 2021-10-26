/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

let guesses = 0;
let answer = Math.floor(Math.random() * (100 - 0 + 1) + 0);
//we have a ran num gen from 0 to 100

console.log(answer);

function submitGuess() {
  let userGuess = Number(document.querySelector(".guess").value);
  if (answer === userGuess) {
    document.querySelector(".guessCheck").disabled = true;
    document.querySelector("#message").textContent = `You Win!`;

    guesses++;
    let chance = document.querySelector(`#chance-${guesses}`);
    chance.textContent = `${userGuess}`;
    chance.style.backgroundColor = "green";
  } else {
    document.querySelector("#message").textContent = `Wrong!`;
    // console.log(guesses);
    if (guesses === 3) {
      document.querySelector(".guessCheck").disabled = true;
      document.querySelector("#message").textContent = `You Lose!`;
    }
    guesses++;
    let chance = document.querySelector(`#chance-${guesses}`);
    chance.textContent = `${userGuess}`;
    chance.style.backgroundColor = "red";
  }
  console.log(guesses);
  // playagain()
}

function hint() {
  document.querySelector("#hintText").textContent =
    answer + Math.floor(Math.random() * (10 - 0 + 1) + 0);

  document.querySelector("#hintText2").textContent =
    answer + Math.floor(Math.random() * (0 - 10 + 1) + 0);
  document.querySelector("#hintText3").textContent =
    answer + Math.floor(Math.random() * (10 - 0 + 1) + 0);
  document.querySelector("#hintText4").textContent =
    answer + Math.floor(Math.random() * (0 - 10 + 1) + 0);
  document.querySelector("#hintText5").textContent =
    answer + Math.floor(Math.random() * (10 - 0 + 1) + 0);
  document.querySelector("#hintText6").textContent =
    answer + Math.floor(Math.random() * (0 - 10 + 1) + 0);
}

let playReset = document.querySelector(".resetSite");

function playagain() {
  location.reload();
}
// console.log(guesses);
