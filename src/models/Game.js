export class Game {
  #win;
  #bonus;
  constructor(win, bonus) {
    this.#validateWinAndBonus(win, bonus);
    this.#win = win;
    this.#bonus = bonus;
  }

  #validateWinAndBonus(win, bonus) {}
}