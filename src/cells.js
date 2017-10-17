exports.countLivingNeighbours = (board, r, c) => {
  let livingNeighbours = 0

  if (isAlive(board, r - 1, c - 1)) livingNeighbours++ // top left
  if (isAlive(board, r - 1, c)) livingNeighbours++ // top middle
  if (isAlive(board, r - 1, c + 1)) livingNeighbours++ // top right

  if (isAlive(board, r, c - 1)) livingNeighbours++ // middle left
  if (isAlive(board, r, c + 1)) livingNeighbours++ // middle right

  if (isAlive(board, r + 1, c - 1)) livingNeighbours++ // bottom left
  if (isAlive(board, r + 1, c)) livingNeighbours++ // bottom middle
  if (isAlive(board, r + 1, c + 1)) livingNeighbours++ // bottom right

  return livingNeighbours
}

const isAlive = (board, r, c) => {
  if (board[r] !== undefined && board[r][c] !== undefined && board[r][c]) {
    return true
  }

  return false
}
