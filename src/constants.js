export const INPUT_QUESTION = {
  FIRST: '구입금액을 입력해 주세요.\n',
  SECOND: '당첨 번호를 입력해 주세요.\n',
  THIRD: '보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT = {
  BUY_RESULT: '개를 구매했습니다.\n',
  RESULT_REPORT: '당첨 통계\n---\n',
  REPORT_5th: '개 일치 (5,000원) - ',
  REPORT_4th: '개 일치 (50,000원) - ',
  REPORT_3th: '개 일치 (1,500,000원) - ',
  REPORT_2th: '개 일치, 보너스 볼 일치 (30,000,000원) - ',
  REPORT_1th: '개 일치 (2,000,000,000원) - ',
};

export const EMPTY = '';

export const ERROR = {
  EMPTY_INPUT: '[ERROR] 입력을 해주세요.',
  NO_SPACES: '[ERROR] 공백이 포함되어 있습니다.',
  MONEY_NAN: '[ERROR] 숫자만 입력해주세요.',
  MONEY_NOT_THOUSAND: '[ERROR] 1,000원 단위로 입력해주세요.',
};

export const MIN_MONEY = 1_000;