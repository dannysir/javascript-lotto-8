import { ERROR } from '../../constants.js';

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number).sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.some((value) => String(value).trim() !== String(value)) ) throw new Error(ERROR.NO_SPACES);
    if (numbers.some((value) => isNaN(value))) throw new Error(ERROR.NAN);
    if (numbers.length !== 6) throw new Error(ERROR.LOTTO_WRONG_SIZE);
    if (new Set(numbers).size !== numbers.length) throw new Error(ERROR.DUPLICATE);
    if (numbers.some((value) => value < 1 || 45 < value)) throw new Error(ERROR.NUMBER_OUT_RANGE);
  }

  getNumbers() {
    return [...this.#numbers];
  }

  check(duplicate, bonus) {
    const count = this.#numbers.reduce((acc, cur) => {
      return duplicate.has(cur) ? acc + 1 : acc;
    }, 0);
    const isBonus = this.#numbers.includes(bonus);
    return [count, isBonus];
  }
}
