import { Random } from '@woowacourse/mission-utils';
import { Lotto } from './Lotto.js';
import { ERROR, MIN_MONEY } from '../constants.js';

export class User {
  #money;
  #lotto;
  constructor(money) {
    this.#validateMoney(money);
    this.#money = +money;
    this.#lotto = [];
  }

  buyLotto() {
    for (let i = 0; i < this.#money / 1000; i++) {
      this.#lotto.push(new Lotto(this.#makeRandomLottoNumber()));
    }
  }

  getLottoNumbers() {
    return this.#lotto.map((lotto) => {
      return lotto.getNumbers();
    });
  }

  #makeRandomLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  #validateMoney(money) {
    if (money.trim() !== money) throw new Error(ERROR.NO_SPACES);
    if (isNaN(money)) throw new Error(ERROR.NAN);
    if (+money % MIN_MONEY !== 0) throw new Error(ERROR.MONEY_NOT_THOUSAND);
  }
}
