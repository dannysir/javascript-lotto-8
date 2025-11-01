import { mockRandoms } from '../../../test-helpers/mockUtils.js';
import User from './User.js';

describe('User 모델', () => {
  test.each([['100'], ['1!99'], [' 100'], ['1001'], ['40001']])(
    '[예외 테스트] 잘못된 금액 - 입력 : %s',
    async (input) => {
      await expect(() => new User(input)).toThrow('[ERROR]');
    }
  );

  describe('정상 동작 메서드 테스트', () => {
    let user;
    let randoms;

    beforeEach(() => {
      jest.restoreAllMocks();
      const money = '3000';
      randoms = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 45],
        [1, 2, 3, 4, 10, 45],
      ];
      mockRandoms(randoms);

      user = new User(money);
    });

    test('3개의 로또 생성', () => {
      expect(user.getLottoNumbers()).toEqual(randoms);
    });

    test('로또 결과 리턴', () => {
      const resultArr = [1, 1, 0, 1, 0];
      const duplicate = new Set([1, 2, 3, 4, 5, 6, 45]);
      const bonus = 45;
      const profit = '67668333.3';

      expect(user.result(duplicate, bonus)).toEqual([resultArr, profit]);
    });
  });

});
