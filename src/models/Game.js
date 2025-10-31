import { Lotto } from './Lotto.js';
import { DEFAULT_DELIMITER, ERROR } from '../constants.js';

export class Game {
  #winLotto;
  #bonus;
  #duplicate;
  constructor(win) {
    const winArr = win.split(DEFAULT_DELIMITER);
    this.#validateLotto(winArr);
    this.#winLotto = new Lotto(winArr.map(Number));
    this.#duplicate = new Set(this.#winLotto.getNumbers());
  }

  setBonusNumber(bonus) {
    this.#validateNumber(bonus, true);
    this.#bonus = bonus;
    this.#duplicate.add(bonus);
  }

  #validateLotto(winArr) {
    winArr.forEach((num) => this.#validateNumber(num));
  }

  #validateNumber(num, isBonusNumber = false) {
    if (num.trim() !== num) throw new Error(ERROR.NO_SPACES);
    if (isNaN(num)) throw new Error(ERROR.NAN);
    if (isBonusNumber && this.#duplicate.has(+num)) throw new Error(ERROR.DUPLICATE);
    if (isBonusNumber && (+num < 1 || 45 < +num)) throw new Error(ERROR.NUMBER_OUT_RANGE);
  }
}
