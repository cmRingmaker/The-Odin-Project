const boardSquares = document.querySelectorAll('.space')
const currentRound = document.getElementById('info')

// Scores
const playerWinScore = document.getElementById('playerWin')
const computerWinScore = document.getElementById('computerWin')

// MODAL
const modal = document.getElementById('modal')
const modalWinOrLose = document.getElementById('winOrLose')
const modalWinner = document.getElementById('modalWinner')
const modalMessage = document.getElementById('infoMsg')
const statStreak = document.getElementById('statStreak')
const statWins = document.getElementById('statsWins')
const clearStreak = document.getElementById('clearStreak')
const replayGame = document.getElementById('replayGame')

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

    // Track Wins and Streaks
    this.player1Wins = localStorage.getItem('player1Wins') ? parseInt(localStorage.getItem('player1Wins')) : 0
    this.player2Wins = localStorage.getItem('player2Wins') ? parseInt(localStorage.getItem('player2Wins')) : 0
    this.player1Streak = localStorage.getItem('player1Streak') ? parseInt(localStorage.getItem('player1Streak')) : 0
    this.player2Streak = localStorage.getItem('player2Streak') ? parseInt(localStorage.getItem('player2Streak')) : 0
    this.winsAndStreaksUI()
    
    const winConditions = [ // Check indexes for win conditions
      // horizontal:
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      // vertical:
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      // diagonal:
      [0, 4, 8], [2, 4, 6]
    ]

    this.winConditions = winConditions
  }

  checkWin(player) {
    const playerMarker = player.getMarker()
    const board = this.gameBoard.getBoard()
  
    if (this.round < 5) {
      return false // Do not check win conditions if they are not possible
    }
  
    for (const combination of this.winConditions) {
      const [a, b, c] = combination
  
      if (board[a] === playerMarker && board[b] === playerMarker && board[c] === playerMarker) {
        this.updateUIAndModal(playerMarker)

        return `${playerMarker} wins!`
      }
    }
    return false
  }
  
  getCurrentPlayer() {
    console.log('CURRENT CALL')
    const currentPlayer = this.currentPlayer
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1
    console.log(`getcurrentPlayer = ${this.currentPlayer.marker}`)
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

    // Hack to make sure currentround info is actually correct when computer plays
    currentRound.textContent = `Current Round: ${this.round + 1}`

    if(this.currentPlayer === this.player2) {
      setTimeout(() => {
        this.computerMove()
      }, 700);
    }

    if(result) {
      // Win result!
      console.log(result)
    } else {
      this.updateCurrentTurn(currentPlayer)
      this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1
      this.round++; // Increment round after switching current player
    }
  }
}


  resetBoard() {
    this.gameBoard = new GameBoard()
    this.round = 1
    this.currentPlayer = this.player1

    boardSquares.forEach(square => {
      square.innerHTML = '&nbsp;'
      square.classList.remove('playerX', 'playerO')
    })

    currentRound.textContent = 'Current Round: 1'
  }

  resetGame() {
    modal.close()
    this.resetBoard()
    modalWinner.removeAttribute('class')
  }

  clearStreak() {
    localStorage.clear()
    this.player1Wins = 0
    this.player2Wins = 0
    this.player1Streak = 0
    this.player2Streak = 0
    this.winsAndStreaksUI()
  }

  getRandomSquare() {
    const board = this.gameBoard.getBoard()
    const empties = []

    for(let i = 0; i < board.length; i++) {
      if(board[i] === null) {
        empties.push(i)
      }
    }

    if(empties.length === 0) {
      return null
    }
    
    return empties[Math.floor(Math.random() * empties.length)]
  }

  computerMove() {
    const currentPlayer = this.currentPlayer
    if (currentPlayer === this.player2) {
      const index = this.getRandomSquare();
      if (index !== null) {
        this.playMove(index);
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1
      } else {
        console.log('Game is a tie!');

      // Update modal for when the game Ties
        modalWinOrLose.textContent = 'DRAW!'
        modalWinner.textContent = `Tied`
        modalMessage.textContent = 'Game Tie!'
        modal.showModal()

      }
    }
    
  }

  updateUIAndModal(playerMarker) {
    const isPlayerWin = playerMarker === 'X'

    // Update win counts and streaks
    if (isPlayerWin) {
      this.player1Wins++
      this.player1Streak++
      this.player2Streak = 0
      localStorage.setItem('player1Streak', this.player1Streak)
      localStorage.setItem('player1Wins', this.player1Wins)
    } else {
      this.player2Wins++
      this.player2Streak++
      this.player1Streak = 0
      localStorage.setItem('player2Streak', this.player2Streak)
      localStorage.setItem('player2Wins', this.player2Wins)
    }

    this.winsAndStreaksUI()

    // Update modal
    modalWinOrLose.textContent = isPlayerWin ? 'You Win!' : 'You Lose!'
    modalWinner.textContent = playerMarker
    modalWinner.classList.add(isPlayerWin ? 'playerX' : 'playerO')
    modalMessage.textContent = isPlayerWin ? 'Congratulations!' : 'Try Again!'
    statWins.textContent = isPlayerWin ? `Wins: ${this.player1Wins}` : `Wins: ${this.player2Wins}`
    statStreak.textContent = isPlayerWin ? `Streak: ${this.player1Streak}` : `Streak: ${this.player2Streak}`
    modal.showModal()
  }

  winsAndStreaksUI() {
    // Player 1
    playerWinScore.textContent = `Wins: ${this.player1Wins}`
    statStreak.textContent = `Streak: ${this.player1Streak}`
  
    // Player 2
    computerWinScore.textContent = `Wins: ${this.player2Wins}`
    statStreak.textContent = `Streak: ${this.player2Streak}`
  }

}

const game = new Game()

boardSquares.forEach((square, index) => {
  square.addEventListener('click', () => {
    game.playMove(index)

    const currentPlayer = game.getCurrentPlayer() // Keep for player switching!
    const displayRound = game.getCurrentRound()
    currentRound.textContent = `Current Round: ${displayRound}`
  })
});

clearStreak.addEventListener('click', () => {
  game.resetGame()
  game.clearStreak()
})

replayGame.addEventListener('click', () => game.resetGame())