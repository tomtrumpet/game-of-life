import chai from 'chai'
import sinon from 'sinon'
import boardTick from '../src/board-tick'
import cells from '../src/cells'

const expect = chai.expect
const sandbox = sinon.sandbox.create()

describe ('board tick', () => {
  let countLivingNeighboursStub = null

  beforeEach(function () {
    countLivingNeighboursStub = sandbox.stub(cells, 'countLivingNeighbours')
  })

  afterEach(function () {
    sandbox.restore()
  })

  it ('returns expected next generation due to underpopulation of cells', () => {
    const board = [
      [true, false],
      [false, false]
    ]

    const underpopulatedBoard = [
      [false, false],
      [false, false]
    ]

    countLivingNeighboursStub.returns(0)

    const sut = boardTick.tick(board)

    expect(sut).to.be.eql(underpopulatedBoard)
  })

  it ('returns expected next generation when living cells surrounded by 2 or 3 living neighbours survive until the next generation', () => {
    const board = [
      [true, true, false],
      [true, true, false],
      [false, false, false]
    ]

    const survivedBoard = [
      [true, true, false],
      [true, true, false],
      [false, false, false]
    ]

    countLivingNeighboursStub.onCall(0).returns(3)
    countLivingNeighboursStub.onCall(1).returns(3)
    countLivingNeighboursStub.onCall(2).returns(2)
    countLivingNeighboursStub.onCall(3).returns(3)
    countLivingNeighboursStub.onCall(4).returns(3)
    countLivingNeighboursStub.onCall(5).returns(2)
    countLivingNeighboursStub.onCall(6).returns(2)
    countLivingNeighboursStub.onCall(7).returns(2)
    countLivingNeighboursStub.onCall(8).returns(1)

    const sut = boardTick.tick(board)

    expect(sut).to.be.eql(survivedBoard)
  })

  it ('returns expected next generation when living cells surrounded by more than 3 living cells die of overpopulation', () => {
    const board = [
      [true, true, true],
      [true, true, false],
      [false, false, false]
    ]

    const overpopulationBoard = [
      [true, false, true],
      [true, false, false],
      [false, false, false]
    ]

    countLivingNeighboursStub.onCall(0).returns(3)
    countLivingNeighboursStub.onCall(1).returns(4)
    countLivingNeighboursStub.onCall(2).returns(2)
    countLivingNeighboursStub.onCall(3).returns(3)
    countLivingNeighboursStub.onCall(4).returns(4)
    countLivingNeighboursStub.onCall(5).returns(2)
    countLivingNeighboursStub.onCall(6).returns(2)
    countLivingNeighboursStub.onCall(7).returns(2)
    countLivingNeighboursStub.onCall(8).returns(1)

    const sut = boardTick.tick(board)

    expect(sut).to.be.eql(overpopulationBoard)
  })

  it ('returns expected next generation when dead cells surrounded by 3 living cells cause it to spring to life', () => {
    const board = [
      [false, false, false],
      [false, false, true],
      [false, true, true]
    ]

    const reproductionBoard = [
      [false, false, false],
      [false, true, true],
      [false, true, true]
    ]

    countLivingNeighboursStub.onCall(0).returns(0)
    countLivingNeighboursStub.onCall(1).returns(0)
    countLivingNeighboursStub.onCall(2).returns(0)
    countLivingNeighboursStub.onCall(3).returns(0)
    countLivingNeighboursStub.onCall(4).returns(3)
    countLivingNeighboursStub.onCall(5).returns(2)
    countLivingNeighboursStub.onCall(6).returns(1)
    countLivingNeighboursStub.onCall(7).returns(2)
    countLivingNeighboursStub.onCall(8).returns(2)

    const sut = boardTick.tick(board)

    expect(sut).to.be.eql(reproductionBoard)
  })
})
