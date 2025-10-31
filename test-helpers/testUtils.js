import { mockQuestions, mockRandoms, getLogSpy } from './mockUtils.js';
import App from '../src/App.js';

export const runWithInput = async (inputs, randoms = [[1, 2, 3, 4, 5, 6]]) => {
  const logSpy = getLogSpy();

  mockRandoms(randoms);
  mockQuestions(inputs);

  const app = new App();
  await app.run();

  return logSpy;
};
