import cells from './cells'
import grid from './helpers/grid'

exports.tick = (board) => {
  let changes = grid.createGrid(board.length, board[0].length)

  board.forEach((row, r) => {
    row.forEach((cell, c) => {
      let livingNeighbours = cells.countLivingNeighbours(board, r, c)

      changes[r][c] = shouldLive(cell, livingNeighbours)
    })
  })

  return makeChanges(board, changes)
}

const makeChanges = (board, changes) => {
  board.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (changes[r][c] !== null) {
        board[r][c] = changes[r][c]
      }
    })
  })

  return board
}

const shouldLive = (isAlive, livingNeighbours) => {
  if (isAlive && (livingNeighbours === 2 || livingNeighbours === 3)) {
    return true
  }

  if (!isAlive && livingNeighbours === 3) {
    return true
  }

  return false
}
