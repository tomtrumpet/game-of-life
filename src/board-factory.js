exports.createBoard = (rows, columns, seeds) => {
  const board = [rows]

  for (let r = 0; r < rows; r++) {
    board[r] = []

    for (let c = 0; c < columns; c++) {
      board[r][c] = false
    }
  }

  for (let s = 0; s < seeds.length; s++) {
    board[seeds[s][0]][seeds[s][1]] = true
  }

  return board
}
