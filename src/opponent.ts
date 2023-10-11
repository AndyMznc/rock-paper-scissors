import { actions } from "./main";

function getComputerChoice(): string {
  return actions[Math.floor(Math.random() * actions.length)];
}
export default getComputerChoice;
