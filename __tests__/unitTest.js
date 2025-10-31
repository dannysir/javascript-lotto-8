import { User } from '../src/models/User.js';
import { Lotto } from '../src/models/Lotto.js';
import { mockRandoms } from './helpers/mockUtils.js';

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
    user.buyLotto();

    expect(user.getLottoNumbers()).toEqual(randoms);
  });
});

describe('Lotto 모델', () => {
  test.each([
    ['로또 번호 갯수 6 초과', [1, 2, 3, 4, 5, 6, 7]],
    ['로또 번호 중복', [1, 2, 3, 4, 5, 5]],
  ])('[예외 테스트] 로또 번호 %s - 입력 : %s', async (_, input) => {
    await expect(() => new Lotto(input)).toThrow('[ERROR]');
  });
});
