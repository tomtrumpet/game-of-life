import cells from './cells'

exports.tick = (board) => {
  let changes = createChanges(board.length, board[0].length)

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      let livingNeighbours = cells.countLivingNeighbours(board, r, c)

      changes[r][c] = shouldLive(board[r][c], livingNeighbours)
    }
  }

  return makeChanges(board, changes)
}

const createChanges = (rows, columns) => {
  let changes = [rows]

  for (let r = 0; r < rows; r++) {
    changes[r] = []

    for (let c = 0; c < columns; c++) {
      changes[r][c] = null
    }
  }

  return changes
}

const makeChanges = (board, changes) => {
  for (let r = 0; r < changes.length; r++) {
    for (let c = 0; c < changes[0].length; c++) {
      if (changes[r][c] !== null) {
        board[r][c] = changes[r][c]
      }
    }
  }

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
