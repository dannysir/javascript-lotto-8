import { EMPTY, ERROR } from '../constants.js';
import { Console } from '@woowacourse/mission-utils';

export const readInput = async (question) => {
  const input = await Console.readLineAsync(question);
  validate(input);
  return input;
};

const validate = (input) => {
  if (input === EMPTY) {
    throw new Error(ERROR.EMPTY_INPUT);
  }
};
