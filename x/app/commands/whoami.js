import {TermColors} from "../constants.js";
import {colorize} from "../utils.js";

const LAST_UPDATE = '2022-06-06';

const whoami = {
  id: "whoami",
  args: 0,
  description: 'display effective developer info',
  async exec(term, _args) {
    term.writeln(colorize(TermColors.Green, 'name: ') + '<Your Name Goes Here>');
    term.writeln(colorize(TermColors.Green, 'Season Details: ') + 'X - 2022');
    term.writeln(colorize(TermColors.Red, "Oh Hey! You find a Secret Hint!") + " Its advised to go to Developer Tools and open  the Console Tab during these Terminal Puzzles");
    console.log("It'll Look something like this.");
  },
};

export default whoami;
