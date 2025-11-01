import Game from './models/Game/Game.js';
import User from './models/User/User.js';
import Input from './view/Input.js';
import Output from './view/Output.js';

export default class App {
  #input;
  #output;

  constructor() {
    this.#input = new Input();
    this.#output = new Output();
  }

  async run() {
    try {
      const user = await this.#createUser();
      const game = await this.#createGame();

      this.#displayResult(user, game);
    } catch (error) {
      this.#output.printError(error);
    }
  }

  async #createUser() {
    const purchaseAmount = await this.#input.getPurchaseAmount();
    const user = new User(purchaseAmount);

    this.#output.printLottoBought(user.getLottoNumbers());

    return user;
  }

  async #createGame() {
    const winningNumbers = await this.#input.getWinningNumbers();
    const game = new Game(winningNumbers);

    const bonusNumber = await this.#input.getBonusNumber();
    game.setBonusNumber(bonusNumber);

    return game;
  }

  #displayResult(user, game) {
    const [resultArr, profit] = user.result(...game.getResult());

    this.#output.printResult(resultArr, profit);
  }
}
