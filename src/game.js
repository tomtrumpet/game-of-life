import boardFactory from './board-factory'
import boardTick from './board-tick'
import logUpdate from 'log-update'

exports.play = async (rows, columns, seeds, iterations) => {
  const board = boardFactory.createBoard(rows, columns, seeds)

  for (let i = 0; i < iterations; i++) {
    let tick = boardTick.tick(board)

    let tickDrawing = tick
      .map(row => {
        let rowString = ''

        row.map(column => {
          rowString += (column) ? 'x' : '.'
        })

        return rowString
      })
      .join('\n')

    logUpdate(tickDrawing)
    await sleep(100)
  }
}

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
