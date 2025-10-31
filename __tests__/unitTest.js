import User from '../src/models/User.js';
import Lotto from '../src/models/Lotto.js';
import { mockRandoms } from '../test-helpers/mockUtils.js';
import Game from '../src/models/Game.js';

describe('User 모델', () => {
  test.each([['100'], ['1!99'], [' 100'], ['1001'], ['40001']])(
    '[예외 테스트] 잘못된 금액 - 입력 : %s',
    async (input) => {
      await expect(() => new User(input)).toThrow('[ERROR]');
    }
  );

  test('3개의 로또 생성', () => {
    const money = '3000';
    const randoms = [
      [1, 2, 3, 4, 5, 6],
      [3, 12, 18, 27, 35, 41],
      [1, 8, 15, 22, 39, 44],
    ];
    mockRandoms(randoms);

    const user = new User(money);

    expect(user.getLottoNumbers()).toEqual(randoms);
  });

  test('로또 결과 반환', () => {
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
});

describe('Lotto 모델', () => {
  test.each([
    ['로또 번호 갯수 6 초과', [1, 2, 3, 4, 5, 6, 7]],
    ['로또 번호 중복', [1, 2, 3, 4, 5, 5]],
  ])('[예외 테스트] 로또 번호 %s - 입력 : %s', (_, input) => {
    expect(() => new Lotto(input)).toThrow('[ERROR]');
  });
});

describe('Game 모델', () => {
  test.each([
    ['당첨 번호 갯수 6 초과', '1,2,3,4,5,6,7'],
    ['당첨 번호 갯수 6 미만', '1,2,3,4,5'],
    ['당첨 번호 중복', '1,2,3,4,5,5'],
    ['당첨 번호 숫자가 아닌값', '1,이,3,4,5,6'],
    ['당첨 번호 숫자 범위 초과1', '1,2,3,4,5,400'],
    ['당첨 번호 숫자 범위 초과2', '1,-2,3,4,5,6'],
    ['당첨 번호 공백', '1,2, 3,4,5,6'],
  ])('[예외 테스트] %s - 입력 : %s', (_, winNum) => {
    expect(() => new Game(winNum)).toThrow('[ERROR]');
  });

  test.each([
    ['보너스 번호 중복', '1,2,3,4,5,6', '1'],
    ['보너스 번호 숫자가 아닌값', '1,2,3,4,5,6', '셋'],
    ['보너스 번호 범위 초과1', '1,2,3,4,5,6', '455'],
    ['보너스 번호 범위 초과2', '1,2,3,4,5,6', '0'],
    ['보너스 번호 공백', '1,2,3,4,5,6', '1 1'],
  ])('[예외 테스트] %s - 입력 : %s, %s', (_, winNum, bonusNum) => {
    const game = new Game(winNum);

    expect(() => game.setBonusNumber(bonusNum)).toThrow('[ERROR]');
  });
});
