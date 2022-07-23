import {TermColors} from '../constants.js';
import { colorize, getSpacing} from '../utils.js';

import cat from './cat.js';
import exit from './exit.js';
import ls from './ls.js';
import open from './open.js';
import randc from './randc.js';
import rm from './rm.js';
import uname from './uname.js';
import whoami from './whoami.js';

const SystemCommands = [
  cat,
  exit,
  ls,
  open,
  randc,
  rm,
  uname,
  whoami,

  {
    id: 'help',
    args: 0,
    async exec(term, _args) {
      term.writeln('available commands:');
      term.writeln('whoami  : idk what this does lol');
      term.writeln('exit : closes this session');


    },
  },

  {
    id: 'R3JlYXQgR29pbmch',
    args: 0,
    async exec(term, _args) {
      term.writeln('Oooh, you seem to understand, Great Going!');
      term.writeln('Righty, on to your next puzzle...');
      term.writeln('In a Blocky Game, you need to go to the coordinates of a number which was prohibited on Cafe Of Life (all directions)');
      term.writeln('Hint : Where is the name SirPerson used, Hmm....');
      term.writeln('SCREENSHOT');
    },
  },

  {
    id: 'TWluZXRlc3Q=',
    args: 0,
    async exec(term, _args) {
      term.writeln("Oh GG lol, didnt think that you'll find it lmao");
      term.writeln("You're nearing now...");
      term.writeln("Now then, part of your last clue to end the Terminal Based Puzzle");
      term.writeln("You need to go to an Older Version of the same server, BUT in the reverse direction of the coordinates");


    },
  },

  {
    id: 'T2xkIEVvTA==',
    args: 0,
    async exec(term, _args) {
      term.writeln("You've Won! (Or have You?)");
      console.log("You're actually smart to look at the console logs lol");
      console.log("Now, its time for you to move onto a different puzzle");
      console.log("Don't Worry though, you're actually nearing the end");
      term.writeln('SCREENSHOT');
      console.log("For the Last Puzzle, you'll need to watch a video");
      console.log("as for where the video is, hmm https://danr789.github.io/video.mp4 ")
      console.log("Hint : Things are NOT as they appear")
      console.log("WAIT, ITS NOT DONE YET, INCOMPLETE PUZZLE FROM HERE");
      console.log("SCREENSHOT")

    },
  },
];

export async function exec(userInput, term) {
  const [input, ...args] = userInput.split(/\s+/);
  const command = SystemCommands.find(c => c.id === input);
  if (!command) {
    return false;
  }

  if (args.length > 0) {
    if (command.args === 0) {
      term.writeln(colorize(TermColors.Red, `${command.id} does not accept arguments`));
      return true;
    }

    if (command.args === -1) {
      // Accepts 1 or more
      await command.exec(term, args);
      return true;
    }

    if (command.args !== args.length) {
      term.writeln(colorize(TermColors.Red, 'wrong arguments'));
      term.writeln(`usage: ${command.usage}`);
    } else {
      await command.exec(term, args);
    }
  } else {
    if (command.args === 0) {
      await command.exec(term, args);
    } else {
      term.writeln(colorize(TermColors.Red, 'wrong arguments'));
      term.writeln(`usage: ${command.usage}`);
    }
  }
  return true;
}
