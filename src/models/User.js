import { Random } from "@woowacourse/mission-utils";
import { Lotto } from './Lotto.js';

export class User {
  #money;
  #lotto;
  constructor(money) {
    this.#validateMoney(money);
    this.#money = money;
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

  #validateMoney(money) {}
}
