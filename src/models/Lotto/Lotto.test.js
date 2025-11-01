import Lotto from './Lotto.js';

describe('Lotto 모델', () => {
  test.each([
    ['로또 번호 갯수 6 초과', [1, 2, 3, 4, 5, 6, 7]],
    ['로또 번호 중복', [1, 2, 3, 4, 5, 5]],
  ])('[예외 테스트] 로또 번호 %s - 입력 : %s', (_, input) => {
    expect(() => new Lotto(input)).toThrow('[ERROR]');
  });
});