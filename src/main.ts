const buttons = document.querySelectorAll<HTMLButtonElement>(".btn");
const scores = document.querySelector<HTMLParagraphElement>(".results__scores");
const actions: string[] = ["rock", "paper", "scissors"];
let lastActionsPlayed = document.querySelector<HTMLParagraphElement>(
  ".results--last-actions"
);
let roundResult = document.querySelector<HTMLParagraphElement>(
  ".results--round-result"
);
let playerScore: number = 0;
let computerScore: number = 0;

if (scores) {
  scores.textContent = `PLAYER : ${playerScore} - ${computerScore} : COMPUTER`;
}

function getComputerChoice(): string {
  return actions[Math.floor(Math.random() * actions.length)];
}

function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function playRound(playerSelection: string, computerSelection: string) {
  const cPlayerSelection = capitalizeFirstLetter(playerSelection);
  const cComputerSelection = capitalizeFirstLetter(computerSelection);

  if (lastActionsPlayed) {
    lastActionsPlayed.textContent = `You play: ${cPlayerSelection} vs ${cComputerSelection}`;
  }

  if (playerSelection === computerSelection) {
    if (roundResult) roundResult.textContent = "It's a tie this round";
    return;
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        if (roundResult) roundResult.textContent = "You lost this round";
        computerScore++;
      } else {
        if (roundResult) roundResult.textContent = "You win this round";
        playerScore++;
      }
      break;

    case "paper":
      if (computerSelection === "scissors") {
        if (roundResult) roundResult.textContent = "You lost this round";
        computerScore++;
      } else {
        if (roundResult) roundResult.textContent = "You win this round";
        playerScore++;
      }
      break;

    case "scissors":
      if (computerSelection === "rock") {
        if (roundResult) roundResult.textContent = "You lost this round";
        computerScore++;
      } else {
        if (roundResult) roundResult.textContent = "You win this round";
        playerScore++;
      }
      break;

    default:
      console.log("Choix invalide");
      break;
  }

  if (scores) {
    scores.textContent = `PLAYER : ${playerScore} - ${computerScore} : COMPUTER`;
  }
  if (playerScore === 3) {
    if (roundResult) roundResult.textContent = "You won the game!";
  } else if (computerScore === 3) {
    if (roundResult) roundResult.textContent = "Computer won the game!";
  }
}

function handleButtonClick(this: HTMLButtonElement) {
  const playerChoice = this.textContent?.toLowerCase() || "";
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);

  if (playerScore === 3) {
    if (roundResult) roundResult.textContent = "You won the game!";
    removeEventListeners();
  } else if (computerScore === 3) {
    if (roundResult) roundResult.textContent = "Computer won the game!";
    removeEventListeners();
  }
}

function removeEventListeners() {
  Array.from(buttons).forEach((button) => {
    button.removeEventListener("click", handleButtonClick);
  });
}

function game() {
  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
}

game();
