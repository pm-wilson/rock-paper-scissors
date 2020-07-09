// import functions and grab DOM elements
import { userWins, computerMove } from "./combatUtils.js";

const playButton = document.querySelector("#trial-button"),
  totalDisplay = document.querySelector("#total-counter"),
  totalWin = document.querySelector("#win-counter"),
  totalLoss = document.querySelector("#lost-counter"),
  totalTied = document.querySelector("#tied-counter"),
  resetButton = document.querySelector("#reset-button"),
  totalResets = document.querySelector("#reset-counter"),
  winResponse = document.querySelector("#win-response");

// initialize state
let wins = 0,
  losses = 0,
  ties = 0,
  resets = 0;

// set event listeners to update state and DOM
playButton.addEventListener("click", () => {
  const userMove = document.querySelector("input:checked");

  if (userMove === null) {
    alert("You must select a champion to fight!");
  } else {
    const computerSelect = computerMove(),
      userResult = userWins(userMove.value, computerSelect);

    if (userResult === "win") {
      wins++;
      winResponse.textContent = "You win! Be sure to pay that champion well.";
    }

    if (userResult === "lose") {
      losses++;
      winResponse.textContent = "You Lose, at least it wasn't you fighting.";
    }

    if (userResult === "tie") {
      ties++;
      winResponse.textContent = "You both picked the same champion, try again.";
    }
    updateScore();
  }
});

resetButton.addEventListener("click", () => {
  (wins = 0), (losses = 0), (ties = 0), resets++;

  updateScore();
});

function updateScore() {
  totalDisplay.textContent = wins + losses + ties;
  totalWin.textContent = wins;
  totalLoss.textContent = losses;
  totalTied.textContent = ties;
  totalResets.textContent = resets;
}
