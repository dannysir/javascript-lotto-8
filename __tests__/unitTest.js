import { User } from '../src/models/User.js';

describe('User 모델', () => {
  test.each([[100], ['1!99'], [' 100'], ['1001'], ['40001']])(
    '[예외 테스트] 잘못된 금액 - 입력 : %s',
    async (input) => {
      await expect(new User(input)).rejects.toThrow('[ERROR]');
    }
  );

});

describe('Lotto 모델', () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
});