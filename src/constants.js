export const INPUT_QUESTION = {
  FIRST: '구입금액을 입력해 주세요.\n',
  SECOND: '\n당첨 번호를 입력해 주세요.\n',
  THIRD: '\n보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT = {
  BUY_RESULT: '개를 구매했습니다.\n',
  RESULT_REPORT: '\n당첨 통계\n---',
};

export const REWARDS = [2_000_000_000, 30_000_000, 1_500_000, 50_000, 5_000];

export const OUTPUT_REPORT = [
  `6개 일치 (${REWARDS[0].toLocaleString()}원) - `,
  `5개 일치, 보너스 볼 일치 (${REWARDS[1].toLocaleString()}원) - `,
  `5개 일치 (${REWARDS[2].toLocaleString()}원) - `,
  `4개 일치 (${REWARDS[3].toLocaleString()}원) - `,
  `3개 일치 (${REWARDS[4].toLocaleString()}원) - `,
];

export const EMPTY = '';

export const ERROR = {
  EMPTY_INPUT: '[ERROR] 입력을 해주세요.',
  NO_SPACES: '[ERROR] 공백이 포함되어 있습니다.',
  NAN: '[ERROR] 숫자만 입력해주세요.',
  MONEY_NOT_THOUSAND: '[ERROR] 1,000원 단위로 입력해주세요.',
  LOTTO_WRONG_SIZE: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE: '[ERROR] 중복된 숫자가 포합되었습니다.',
  NUMBER_OUT_RANGE: '[ERROR] 1 ~ 45 사이의 숫자만 입력해주세요.',
};

export const MIN_MONEY = 1_000;

export const DELIMITER = {
  DEFAULT: ',',
  OUTPUT_ARRAY: ', ',
};

export const RESULT_SIZE = 5;

export const OUTPUT_PROFIT = (profit) => {
  return `총 수익률은 ${profit.toLocaleString()}%입니다.`
};