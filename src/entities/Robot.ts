const sumDigits = (x: number) =>
  Math.abs(x)
    .toString()
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0);

export default class Robot {
  #exploredCells = new Set<string>(); // O(1) lookup
  #explosiveThreshold: number;
  #safeCellCount = 0;

  constructor(explosiveThreshold: number) {
    this.#explosiveThreshold = explosiveThreshold;

    this.explore(0, 0);
  }

  explore(row: number, col: number) {
    const serialisedCoords = `${row},${col}`;

    if (this.#exploredCells.has(serialisedCoords) || sumDigits(row) + sumDigits(col) > this.#explosiveThreshold) {
      return;
    }

    this.#exploredCells.add(serialisedCoords);

    this.#safeCellCount++;

    this.explore(row + 1, col);
    this.explore(row - 1, col);
    this.explore(row, col + 1);
    this.explore(row, col - 1);
  }

  get safeCellCount() {
    return this.#safeCellCount;
  }
}
