import Lotto from './Lotto.js';

describe('Lotto 모델', () => {
  test.each([
    ['로또 번호 갯수 6 초과', [1, 2, 3, 4, 5, 6, 7]],
    ['로또 번호 중복', [1, 2, 3, 4, 5, 5]],
  ])('[예외 테스트] 로또 번호 %s - 입력 : %s', (_, input) => {
    expect(() => new Lotto(input)).toThrow('[ERROR]');
  });

  test('일치 번호 카운트 메서드', () => {
    const duplicate = new Set([1, 2, 3, 4, 5, 6, 45]);
    const bonus = 45;
    const input = '1,2,3,4,10,45';
    const count = 5;
    const isBonus = true;

    const lotto = new Lotto(input.split(','));

    expect(lotto.check(duplicate, bonus)).toEqual([count, isBonus]);
  });
});