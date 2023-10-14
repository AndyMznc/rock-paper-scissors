export const actions: string[] = ["rock", "paper", "scissors"];

let playerScore: number = 0;
let computerScore: number = 0;

function getComputerChoice(): string {
  return actions[Math.floor(Math.random() * actions.length)];
}

function playRound(playerSelection: string, computerSelection: string) {
  console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);

  // Égalité
  if (playerSelection === computerSelection) {
    console.log("égalité");
    return;
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        return computerScore++;
      } else if (computerSelection === "scissors") {
        return playerScore++;
      }
      break;

    case "paper":
      if (computerSelection === "scissors") {
        return computerScore++;
      } else if (computerSelection === "rock") {
        return playerScore++;
      }
      break;

    case "scissors":
      if (computerSelection === "rock") {
        return computerScore++;
      } else if (computerSelection === "paper") {
        return playerScore++;
      }
      break;

    default:
      console.log("Choix invalide");
      break;
  }
}

function game() {
  while (playerScore < 3 && computerScore < 3) {
    for (let i = 0; i < 5; i++) {
      const playerChoiceValue: string = prompt(
        'Choose an action from "rock", "paper", "scissors".'
      ) as string;

      const computerChoiceValue: string = getComputerChoice();

      playRound(playerChoiceValue.toLowerCase(), computerChoiceValue);

      console.log(`player : ${playerScore} - computer : ${computerScore}`);

      if (playerScore >= 3 || computerScore >= 3) {
        break;
      }
    }

    if (playerScore >= 3 || computerScore >= 3) {
      break;
    }
  }

  playerScore == 3
    ? console.log("You win !")
    : console.log("You loose, maybe next time !");
}
game();
