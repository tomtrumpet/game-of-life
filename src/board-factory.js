import grid from './helpers/grid';

const createBoard = (rows, columns, seeds) => {
  const board = grid.createGrid(rows, columns);

  seeds.forEach((s) => {
    board[s[0]][s[1]] = true;
  });

  return board;
};

export default { createBoard };
