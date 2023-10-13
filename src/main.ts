import getComputerChoice from "./opponent";

export const actions: string[] = ["rock", "paper", "scissors"];
const computerChoiceValue: string = getComputerChoice();

const playerChoiceValue: string = prompt(
  'Choose an action from "rock", "paper", "scissors".'
) as string;

let playerScore: number = 0;
let computerScore: number = 0;

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
        console.log("perdu");
      } else if (computerSelection === "scissors") {
        console.log("gagné");
      }
      break;

    case "paper":
      if (computerSelection === "scissors") {
        console.log("perdu");
      } else if (computerSelection === "rock") {
        console.log("gagné");
      }
      break;

    case "scissors":
      if (computerSelection === "rock") {
        console.log("perdu");
      } else if (computerSelection === "paper") {
        console.log("gagné");
      }
      break;

    default:
      console.log("Choix invalide");
      break;
  }
}

playRound(playerChoiceValue, computerChoiceValue);

// function playerSelection(playerSelection: string, computerSelection: string) {
//   let playerChoice = playerSelection.toLowerCase()

//   if (!actions.includes(playerChoice)) {
//     console.log("Please, select a valid value.");
//   } else {

//   }
// }
// playerSelection(playerChoiceValue, computerChoiceValue);
