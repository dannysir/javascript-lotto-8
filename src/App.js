import { INPUT_QUESTION } from './constants.js';
import Game from './models/Game.js';
import User from './models/User.js';
import { readInput } from './view/input.js';
import { outputError, outputLottoBuy, outputResultReport } from './view/output.js';

export default class App {
  async run() {
    try {
      const input1 = await readInput(INPUT_QUESTION.FIRST);
      const user = new User(input1);

      outputLottoBuy(user.getLottoNumbers());

      const input2 = await readInput(INPUT_QUESTION.SECOND);
      const game = new Game(input2);
      const input3 = await readInput(INPUT_QUESTION.THIRD);
      game.setBonusNumber(input3);
      const [resultArr, profit] = user.result(...game.getResult());

      outputResultReport(resultArr, profit);
    } catch (error) {
      outputError(error);
    }
  }
}
