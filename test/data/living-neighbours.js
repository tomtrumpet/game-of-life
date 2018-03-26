const livingNeighboursData = [
  {
    board: [
      [false, true, false],
      [true, true, false],
      [false, false, false],
    ],
    row: 0,
    column: 0,
    livingNeighbours: 3,
  },
  {
    board: [
      [true, false, true],
      [true, true, true],
      [false, false, false],
    ],
    row: 0,
    column: 1,
    livingNeighbours: 5,
  },
  {
    board: [
      [false, true, false],
      [false, true, true],
      [false, false, false],
    ],
    row: 0,
    column: 2,
    livingNeighbours: 3,
  },
  {
    board: [
      [true, true, false],
      [false, true, false],
      [true, true, false],
    ],
    row: 1,
    column: 0,
    livingNeighbours: 5,
  },
  {
    board: [
      [true, true, true],
      [true, false, true],
      [true, true, true],
    ],
    row: 1,
    column: 1,
    livingNeighbours: 8,
  },
  {
    board: [
      [false, true, true],
      [false, true, false],
      [false, true, true],
    ],
    row: 1,
    column: 2,
    livingNeighbours: 5,
  },
  {
    board: [
      [false, false, false],
      [true, true, false],
      [false, true, false],
    ],
    row: 2,
    column: 0,
    livingNeighbours: 3,
  },
  {
    board: [
      [false, false, false],
      [true, true, true],
      [true, false, true],
    ],
    row: 2,
    column: 1,
    livingNeighbours: 5,
  },
  {
    board: [
      [false, false, false],
      [false, true, true],
      [false, true, false],
    ],
    row: 2,
    column: 2,
    livingNeighbours: 3,
  },
];

export default livingNeighboursData;
