exports.createGrid = (rows, columns) => {
  let grid = [rows]

  for (let r = 0; r < rows; r++) {
    grid[r] = []

    for (let c = 0; c < columns; c++) {
      grid[r][c] = null
    }
  }

  return grid
}
