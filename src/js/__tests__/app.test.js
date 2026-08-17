import { GoblinGame } from "../app";

describe("GoblinGame Logic", () => {
  test("алгоритм getRandomIndex не должен возвращать текущий индекс", () => {
    const game = new GoblinGame();

    game.cells = new Array(16);

    game.currentCellIndex = 5;

    for (let i = 0; i < 50; i++) {
      const newIndex = game.getRandomIndex();
      expect(newIndex).not.toBe(5);
      expect(newIndex).toBeGreaterThanOrEqual(0);
      expect(newIndex).toBeLessThan(16);
    }
  });
});
