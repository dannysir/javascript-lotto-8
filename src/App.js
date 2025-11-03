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
    const user = await this.#createUser();
    const game = await this.#createGame();

    this.#displayResult(user, game);
  }

  async #createUser() {
    const user = await this.#getUserAndMoney();
    this.#output.printLottoBought(user.getLottoNumbers());

    return user;
  }

  async #createGame() {
    const game = await this.#getGameAndWinNum();
    await this.#setBonusNumberToGame(game);

    return game;
  }

  async #getUserAndMoney() {
    while (true) {
      try {
        const purchaseAmount = await this.#input.getPurchaseAmount();
        return new User(purchaseAmount);
      } catch (error) {
        this.#output.printError(error);
      }
    }
  }

  async #getGameAndWinNum() {
    while (true) {
      try {
        const winningNumbers = await this.#input.getWinningNumbers();
        return new Game(winningNumbers);
      } catch (error) {
        this.#output.printError(error);
      }
    }
  }

  async #setBonusNumberToGame(game) {
    while (true) {
      try {
        const bonusNumber = await this.#input.getBonusNumber();
        game.setBonusNumber(bonusNumber);
        return;
      } catch (error) {
        this.#output.printError(error);
      }
    }
  }

  #displayResult(user, game) {
    const [resultArr, profit] = user.result(...game.getResult());

    this.#output.printResult(resultArr, profit);
  }
}
