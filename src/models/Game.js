import { DELIMITER, ERROR } from '../constants.js';
import Lotto from './Lotto.js';

export default class Game {
  #winLotto;
  #bonus;
  #duplicate;
  constructor(win) {
    const winArr = win.split(DELIMITER.DEFAULT);
    this.#winLotto = new Lotto(winArr);
    this.#duplicate = new Set(this.#winLotto.getNumbers());
  }

  setBonusNumber(bonus) {
    this.#validateNumber(bonus, true);
    this.#bonus = +bonus;
    this.#duplicate.add(+bonus);
  }

  getResult() {
    return [new Set(this.#duplicate), this.#bonus];
  }

  #validateNumber(num) {
    if (isNaN(num)) throw new Error(ERROR.NAN);
    if (this.#duplicate.has(+num)) throw new Error(ERROR.DUPLICATE);
    if (+num < 1 || 45 < +num) throw new Error(ERROR.NUMBER_OUT_RANGE);
  }
}
