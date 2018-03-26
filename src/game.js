import logUpdate from 'log-update';
import boardFactory from './board-factory';
import boardTick from './board-tick';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const drawCrossOrDot = column => (column ? 'x' : '.');

const drawTick = tick => tick
  .map(row => row.map(drawCrossOrDot))
  .join('\n');

const play = async (rows, columns, seeds, iterations) => {
  const board = boardFactory.createBoard(rows, columns, seeds);

  for (let i = 0; i < iterations; i += 1) {
    const tick = boardTick.tick(board);

    logUpdate(drawTick(tick));

    /* eslint-disable no-await-in-loop */
    await sleep(100);
  }
};

export default { play };
