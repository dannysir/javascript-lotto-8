import { mockRandoms } from '../../test-helpers/mockUtils.js';
import Game from './Game/Game.js';
import User from './User/User.js';

describe('Model 관련 통합 테스트', () => {
  test('로또 결과 반환1', () => {
    const money = '5000';
    const lottoWinNum = '1,2,3,4,5,6';
    const bonusNum = '45';
    const randoms = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 45],
      [1, 2, 3, 4, 10, 11],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];
    const expectedResult = [[1, 1, 0, 1, 0], (40601000).toFixed(1)];
    mockRandoms(randoms);

    const game = new Game(lottoWinNum);
    game.setBonusNumber(bonusNum);
    const user = new User(money);

    expect(user.result(...game.getResult())).toEqual(expectedResult);
  });

  test('로또 결과 반환2', () => {
    const money = '3000';
    const lottoWinNum = '1,2,3,4,5,6';
    const bonusNum = '45';
    const randoms = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 45],
      [1, 2, 3, 4, 10, 45],
    ];
    const expectedResult = [[1, 1, 0, 1, 0], (67668333.3).toFixed(1)];
    mockRandoms(randoms);

    const game = new Game(lottoWinNum);
    game.setBonusNumber(bonusNum);
    const user = new User(money);

    expect(user.result(...game.getResult())).toEqual(expectedResult);
  });
});
