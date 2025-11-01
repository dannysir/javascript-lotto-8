import { EMPTY, ERROR, INPUT_QUESTION } from '../constants.js';
import { Console } from '@woowacourse/mission-utils';

export default class Input {
  async getPurchaseAmount() {
    return await this.#readInput(INPUT_QUESTION.FIRST);
  }

  async getWinningNumbers() {
    return await this.#readInput(INPUT_QUESTION.SECOND);
  }

  async getBonusNumber() {
    return await this.#readInput(INPUT_QUESTION.THIRD);
  }

  async #readInput(question) {
    const input = await Console.readLineAsync(question);
    this.#validate(input);

    return input;
  }

  #validate(input) {
    if (input === EMPTY) {
      throw new Error(ERROR.EMPTY_INPUT);
    }
  }
}
