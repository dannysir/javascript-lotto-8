import { ERROR } from '../constants.js';

export class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a,b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR.LOTTO_WRONG_SIZE);
    if (new Set(numbers).size !== numbers.length) throw new Error(ERROR.DUPLICATE);
  }

  getNumbers() {
    return [...this.#numbers];
  }
}
