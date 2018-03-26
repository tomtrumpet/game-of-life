const createGrid = (rows, columns) => {
  const grid = [rows];

  for (let r = 0; r < rows; r += 1) {
    grid[r] = [];

    for (let c = 0; c < columns; c += 1) {
      grid[r][c] = null;
    }
  }

  return grid;
};

export default { createGrid };
