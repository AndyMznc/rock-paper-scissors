import getComputerChoice from "./opponent";

export const actions: string[] = ["rock", "paper", "scissors"];
const computerChoiceValue: string = getComputerChoice();

const playerChoiceValue: string = prompt(
  'Choose an action from "rock", "paper", "scissors".'
) as string;

function game(playerSelection: string, computerSelection: string) {
  console.log(playerSelection);
  console.log(computerSelection);
}
game(playerChoiceValue, computerChoiceValue);
