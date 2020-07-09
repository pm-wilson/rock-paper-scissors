// import functions and grab DOM elements
import { userWins, computerMove } from "./combatUtils.js";

const playButton = document.querySelector("#trial-button"),
  totalDisplayArea = document.querySelector("#total-counter"),
  totalWinArea = document.querySelector("#win-counter"),
  totalLossArea = document.querySelector("#lost-counter"),
  totalTiedArea = document.querySelector("#tied-counter"),
  resetButton = document.querySelector("#reset-button"),
  totalResetsArea = document.querySelector("#reset-counter"),
  winResponseArea = document.querySelector("#win-response");

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
      winResponseArea.textContent = "You win! Be sure to pay that champion well.";
    }

    if (userResult === "lose") {
      losses++;
      winResponseArea.textContent = "You Lose, at least it wasn't you fighting.";
    }

    if (userResult === "tie") {
      ties++;
      winResponseArea.textContent = "You both picked the same champion, try again.";
    }
    updateScore();
  }
});

resetButton.addEventListener("click", () => {
  (wins = 0), (losses = 0), (ties = 0), resets++;

  updateScore();
});

function updateScore() {
  totalDisplayArea.textContent = wins + losses + ties;
  totalWinArea.textContent = wins;
  totalLossArea.textContent = losses;
  totalTiedArea.textContent = ties;
  totalResetsArea.textContent = resets;
}
