import chai from 'chai';
import boardFactory from '../src/board-factory';

const { expect } = chai;

describe('creating board', () => {
  it('returns expected board size when passed row and column count', () => {
    const rows = 2;
    const columns = 3;

    const sut = boardFactory.createBoard(rows, columns, []);

    expect(sut.length).to.be.equals(rows);
    expect(sut[0].length).to.be.equals(columns);
  });

  it('returns seeded board', () => {
    const rows = 2;
    const columns = 3;
    const seeds = [[0, 2], [1, 2]];

    const sut = boardFactory.createBoard(rows, columns, seeds);

    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < columns; c += 1) {
        if ((seeds[0][0] === r && seeds[0][1] === c) || (seeds[1][0] === r && seeds[1][1] === c)) {
          expect(sut[r][c]).to.be.equals(true);
        } else {
          expect(sut[r][c]).to.be.equals(null);
        }
      }
    }
  });
});
