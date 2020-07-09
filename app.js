// import functions and grab DOM elements
const userMove = document.querySelector("input[name = user-select]:checked"),
  playButton = document.querySelector("#trial-button"),
  totalDisplay = document.querySelector("#reset-button"),
  totalWin = document.querySelector("#reset-button"),
  totalLoss = document.querySelector("#reset-button"),
  totalTied = document.querySelector("#reset-button"),
  totalReset = document.querySelector("#reset-button");

// initialize state

// set event listeners to update state and DOM
playButton.addEventListener("click", () => {
  console.log(userMove.value);
});
