import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { ERROR, MIN_MONEY, RESULT_SIZE, REWARDS } from '../constants.js';

export default class User {
  #money;
  #lotto;
  constructor(money) {
    this.#validateMoney(money);
    this.#money = +money;
    this.#lotto = [];
    this.#buyLotto();
  }

  getLottoNumbers() {
    return this.#lotto.map((lotto) => {
      return lotto.getNumbers();
    });
  }

  result(duplicate, bonus) {
    const resultArr = Array(RESULT_SIZE).fill(0);
    this.#lotto.forEach((lotto) => {
      const [count, isBonus] = lotto.check(duplicate, bonus);
      const rank = this.#checkRank(count, isBonus);
      if (rank) resultArr[rank - 1]++;
    });
    return [resultArr, this.#calculateProfit(resultArr)];
  }

  #buyLotto() {
    for (let i = 0; i < this.#money / 1000; i++) {
      this.#lotto.push(new Lotto(this.#makeRandomLottoNumber()));
    }
  }

  #checkRank(count, isBonus) {
    if (count === 6 && isBonus) return 2;
    if (count === 6) return 1;
    if (count === 5) return 3;
    if (count === 4) return 4;
    if (count === 3) return 5;
    return null;
  }

  #calculateProfit(resultArr) {
    const totalMoney = resultArr.reduce((acc, cur, index) => {
      if (cur) {
        return acc + REWARDS[index] * cur;
      } else return acc;
    }, 0);

    return (Math.round((totalMoney / this.#money) * 100 * 100) / 100).toFixed(1);
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
