import getComputerChoice from "./opponent";

export const actions: string[] = ["rock", "paper", "scissors"];
const computerChoiceValue: string = getComputerChoice();

const playerChoiceValue: string = prompt(
  'Choose an action from "rock", "paper", "scissors".'
) as string;

function playerSelection(playerSelection: string, computerSelection: string) {
  if (actions.includes(playerSelection.toLowerCase())) {
    console.log("ok, good");
  } else {
    console.log("wrong value");
  }
}
playerSelection(playerChoiceValue, computerChoiceValue);
