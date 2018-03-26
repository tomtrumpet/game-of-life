import cells from './cells';
import grid from './helpers/grid';

const makeChanges = (board, changes) => {
  const changedBoard = board;

  board.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (changes[r][c] !== null) {
        changedBoard[r][c] = changes[r][c];
      }
    });
  });

  return changedBoard;
};

const shouldLive = (isAlive, livingNeighbours) => {
  if (isAlive && (livingNeighbours === 2 || livingNeighbours === 3)) {
    return true;
  }

  if (!isAlive && livingNeighbours === 3) {
    return true;
  }

  return false;
};

const tick = (board) => {
  const changes = grid.createGrid(board.length, board[0].length);

  board.forEach((row, r) => {
    row.forEach((cell, c) => {
      const livingNeighbours = cells.countLivingNeighbours(board, r, c);

      changes[r][c] = shouldLive(cell, livingNeighbours);
    });
  });

  return makeChanges(board, changes);
};

export default { tick };
