import { DELIMITER, OUTPUT, OUTPUT_PROFIT, OUTPUT_REPORT } from '../constants.js';
import { Console } from '@woowacourse/mission-utils';

export default class Output {
  printLottoBought(lottos) {
    Console.print(this.#formatLottoBought(lottos));
  }

  printResult(resultArr, profit) {
    Console.print(this.#formatResult(resultArr, profit));
  }

  printError(error) {
    Console.print(error.message);
  }

  #formatLottoBought(lottos) {
    const formatArr = [];

    formatArr.push(this.#formatBoughtHeader(lottos.length));
    lottos.forEach((lotto) => {
      formatArr.push(this.#formatLottoArray(lotto));
    });

    return formatArr.join('\n');
  }

  #formatBoughtHeader(length) {
    return `\n` + length + OUTPUT.BUY_RESULT;
  }

  #formatLottoArray(lotto) {
    return `[${lotto.join(DELIMITER.OUTPUT_ARRAY)}]`;
  }

  #formatResult(resultArr, profit) {
    const formatArr = [];

    formatArr.push(OUTPUT.RESULT_REPORT);
    formatArr.push(...this.#formatReport(resultArr));
    formatArr.push(OUTPUT_PROFIT(profit));

    return formatArr.join('\n');
  }

  #formatReport(resultArr) {
    return resultArr
      .map((value, index) => {
        return OUTPUT_REPORT[index] + value + '개';
      })
      .reverse();
  }
}
