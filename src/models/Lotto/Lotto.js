import { ERROR, LOTTO } from '../../constants.js';

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number).sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.some((value) => String(value).trim() !== String(value)) ) throw new Error(ERROR.NO_SPACES);
    if (numbers.some((value) => isNaN(value))) throw new Error(ERROR.NAN);
    if (numbers.length !== LOTTO.LENGTH) throw new Error(ERROR.LOTTO_WRONG_SIZE);
    if (new Set(numbers).size !== numbers.length) throw new Error(ERROR.DUPLICATE);
    if (numbers.some((value) => value < LOTTO.NUM_RANGE_START || LOTTO.NUM_RANGE_END < value)) throw new Error(ERROR.NUMBER_OUT_RANGE);
  }

  getNumbers() {
    return [...this.#numbers];
  }

  check(duplicate, bonus) {
    const count = this.#numbers.reduce((acc, cur) => {
      if (duplicate.has(cur)) {
        return acc + 1;
      }
      return acc;
    }, 0);
    const isBonus = this.#numbers.includes(bonus);

    return [count, isBonus];
  }
}
