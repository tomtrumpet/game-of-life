import chai from 'chai';
import sinon from 'sinon';
import play from '../src/game';
import boardFactory from '../src/board-factory';
import boardTick from '../src/board-tick';

const { expect } = chai;
const sandbox = sinon.sandbox.create();

describe('playing the game', () => {
  let boardFactoryStub = null;
  let boardTickStub = null;

  beforeEach(() => {
    boardFactoryStub = sandbox.stub(boardFactory, 'createBoard');
    boardTickStub = sandbox.stub(boardTick, 'tick');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should generate a tick', async () => {
    const rows = 5;
    const columns = 6;
    const seed = [[1, 2], [3, 4]];
    const board = [[false]];
    boardFactoryStub
      .withArgs(rows, columns, seed)
      .returns(board);
    boardTickStub
      .returns([]);

    await play.play(rows, columns, seed, 1);

    sinon.assert.calledWithExactly(boardTickStub, board);
  });

  it('should generate a number of ticks', async () => {
    const iterations = 10;
    boardTickStub.returns([]);

    await play.play(0, 0, [], iterations);

    expect(boardTickStub.callCount).to.be.equals(iterations);
  });
});
