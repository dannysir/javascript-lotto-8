import { Console } from "@woowacourse/mission-utils";
import { EMPTY, ERROR } from '../constants.js';

export const readInput = async (question) => {
  const input = await Console.readLineAsync(question);
  validate(input);
  return input
};

const validate = (input) => {
  if (input === EMPTY) {
    throw new Error(ERROR.EMPTY_INPUT);
  }
};