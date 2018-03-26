import chai from 'chai';
import cells from '../src/cells';
import livingNeighboursData from './data/living-neighbours';

const { expect } = chai;

describe('cells', () => {
  it('returns expected count of living neighbours for given board and board position', () => {
    livingNeighboursData.forEach((neighbour) => {
      const sut = cells.countLivingNeighbours(neighbour.board, neighbour.row, neighbour.column);

      expect(sut).is.equals(neighbour.livingNeighbours);
    });
  });
});
