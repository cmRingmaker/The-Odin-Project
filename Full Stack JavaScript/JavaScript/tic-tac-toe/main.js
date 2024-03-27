const boardSquares = document.querySelectorAll('.space')
const currentRound = document.getElementById('info')

class GameBoard {
  constructor() {
    this.board = Array(9).fill(null)
  }

  getBoard() {
    return this.board
  }

  setBoard(index, value) {
    this.board[index] = value
  }
}

class Player {
  constructor(marker) {
    this.marker = marker
  }

  getMarker() {
    return this.marker
  }
}

class Game {
  constructor() {
    this.player1 = new Player('X')
    this.player2 = new Player('O')
    this.currentPlayer = this.player1 // default to user playing first round
    this.gameBoard = new GameBoard()

    const winConditions = { // win conditions check indexes!
      horizontal: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ],
      vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6]
      ]
    }

    this.winConditions = winConditions
  }

  checkWin(player) {
    const playerMarker = player.getMarker()
    const board = this.gameBoard.getBoard()

    for(const type in this.winConditions) {
      const combinations = this.winConditions[type]

      for(const combination of combinations) {
        const [a, b, c] = combination

        if( board[a] === playerMarker && board[b] === playerMarker && board[c] === playerMarker ) {
          return `${playerMarker} wins ${type}!`
        }
      }
    }
    return false;
  }

  getCurrentPlayer() {
    const currentPlayer = this.currentPlayer
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1
    return currentPlayer
  }

  playMove(index) {
    const board = this.gameBoard.getBoard()
    const currentPlayerMarker = this.getCurrentPlayer().getMarker()

    if(board[index] === null) {
      this.gameBoard.setBoard(index, currentPlayerMarker)
      boardSquares[index].textContent = currentPlayerMarker;
      const result = this.checkWin(this.currentPlayer)

      if(result) {
        console.log(result)
      } else {
        this.getCurrentPlayer()
      }

    } else {
      console.log('SQUARE ALREADY OCCUPIED')
    }
  }


}

const game = new Game()

boardSquares.forEach((square, index) => {
  square.addEventListener('click', () => {
    game.playMove(index)

    const currentPlayer = game.getCurrentPlayer()
    currentRound.textContent = `Current player: ${currentPlayer.getMarker()}`
  }, {once: true})
});