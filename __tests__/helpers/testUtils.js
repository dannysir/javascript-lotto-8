import { mockQuestions, mockRandoms, getLogSpy } from './mockUtils';
import App from '../../src/App';

export const runWithInput = async (inputs, randoms = [[1, 2, 3, 4, 5, 6]]) => {
  const logSpy = getLogSpy();

  mockRandoms(randoms);
  mockQuestions(inputs);

  const app = new App();
  await app.run();

  return logSpy;
};