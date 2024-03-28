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
    this.round = 1

    const winConditions = [ // Check indexes for win conditions
      // horizontal:
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // vertical:
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // diagonal:
      [0, 4, 8],
      [2, 4, 6]
    ]

    this.winConditions = winConditions
  }

  checkWin(player) {
    const playerMarker = player.getMarker()
    const board = this.gameBoard.getBoard()

    if(this.round < 5) {
      return false // Do not check win conditions if they are not possible
    }

    for(const combination of this.winConditions) {
      const [a, b, c] = combination

      if(board[a] === playerMarker && board[b] === playerMarker && board[c] === playerMarker) {
        return `${playerMarker} wins!`
      }
    }
    return false;
  }
  
  getCurrentPlayer() {
    const currentPlayer = this.currentPlayer
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1
    return currentPlayer
  }

  getCurrentRound() {
    return this.round
  }

  updateCurrentTurn(player) {
    const playerMarker = player.getMarker()

    const playerElement = document.getElementById(playerMarker === 'X' ? 'playerScore' : 'computerScore')
    const otherElement = document.getElementById(playerMarker === 'X' ? 'computerScore' : 'playerScore')

    playerElement.classList.remove('currentTurn')
    otherElement.classList.add('currentTurn')
  }

  playMove(index) {
    const board = this.gameBoard.getBoard()
    const currentPlayer = this.getCurrentPlayer()
    const currentPlayerMarker = currentPlayer.getMarker()
  
    // To add/remove CSS to which players turn it is
    const markerClass = currentPlayerMarker === 'X' ? 'playerX' : 'playerO'
  
    if(board[index] === null) {
      this.gameBoard.setBoard(index, currentPlayerMarker)
      // Set markers & coloring
      boardSquares[index].textContent = currentPlayerMarker
      boardSquares[index].classList.add(markerClass)
  
      const result = this.checkWin(currentPlayer)
  
      if (result) {
        console.log(result)
      } else {
        this.round++; // New round tracker!
        this.updateCurrentTurn(currentPlayer)
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1
      }
    }
  }

}

const game = new Game()

boardSquares.forEach((square, index) => {
  square.addEventListener('click', () => {
    game.playMove(index)

    const currentPlayer = game.getCurrentPlayer()
    const displayRound = game.getCurrentRound()
    currentRound.textContent = `Current Round: ${displayRound}`
  })
});