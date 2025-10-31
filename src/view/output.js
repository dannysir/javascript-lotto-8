import { Console } from '@woowacourse/mission-utils';
import { DELIMITER, OUTPUT, OUTPUT_PROFIT, OUTPUT_REPORT } from '../constants.js';

export const outputLottoBuy = (lottos) => {
  const outputArr = ['\n' + lottos.length + OUTPUT.BUY_RESULT];
  lottos.forEach((arr) => {
    outputArr.push(`[${arr.join(DELIMITER.OUTPUT_ARRAY)}]`);
  });
  Console.print(outputArr.join('\n'));
};

export const outputResultReport = (resultArr, profit) => {
  const outputArr = resultArr.map((value, index) => {
    return OUTPUT_REPORT[index] + value + '개';
  }).reverse();
  outputArr.unshift(OUTPUT.RESULT_REPORT);
  outputArr.push(OUTPUT_PROFIT(profit))
  Console.print(outputArr.join('\n'));
};
