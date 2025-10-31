import { INPUT_QUESTION } from './constants.js';
import { readInput } from './view/input.js';
import { Game } from './models/Game.js';
import { User } from './models/User.js';

export class App {
  async run() {
    try {
      const input1 = await readInput(INPUT_QUESTION.FIRST);
      const user = new User(input1)

      const input2 = await readInput(INPUT_QUESTION.SECOND);
      const game = new Game(input2);
      const input3 = await readInput(INPUT_QUESTION.THIRD);
      game.setBonusNumber(input3);

    } catch (error) {
    }
  }
}
