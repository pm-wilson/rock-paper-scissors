export function userWins(userMove, computerMove) {
  if (userMove === computerMove) {
    return "tie";
  }
  if (userMove === "paper") {
    if (computerMove === "rock") {
      return "win";
    }
    if (computerMove === "scissors") {
      return "lose";
    }
  }
  if (userMove === "rock") {
    if (computerMove === "paper") {
      return "lose";
    }
    if (computerMove === "scissors") {
      return "win";
    }
  }
  if (userMove === "scissors") {
    if (computerMove === "paper") {
      return "win";
    }
    if (computerMove === "rock") {
      return "lose";
    }
  }
}

export function computerMove() {
  const brain = Math.floor(Math.random() * 3);

  if (brain === 1) {
    return "rock";
  }
  if (brain === 2) {
    return "paper";
  }
  return "scissors";
}
