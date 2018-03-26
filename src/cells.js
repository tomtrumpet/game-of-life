const isAlive = (board, r, c) => {
  if (board[r] !== undefined && board[r][c] !== undefined && board[r][c]) {
    return true;
  }

  return false;
};

const countLivingNeighbours = (board, r, c) => {
  let livingNeighbours = 0;

  if (isAlive(board, r - 1, c - 1)) livingNeighbours += 1; // top left
  if (isAlive(board, r - 1, c)) livingNeighbours += 1; // top middle
  if (isAlive(board, r - 1, c + 1)) livingNeighbours += 1; // top right

  if (isAlive(board, r, c - 1)) livingNeighbours += 1; // middle left
  if (isAlive(board, r, c + 1)) livingNeighbours += 1; // middle right

  if (isAlive(board, r + 1, c - 1)) livingNeighbours += 1; // bottom left
  if (isAlive(board, r + 1, c)) livingNeighbours += 1; // bottom middle
  if (isAlive(board, r + 1, c + 1)) livingNeighbours += 1; // bottom right

  return livingNeighbours;
};

export default { countLivingNeighbours };
