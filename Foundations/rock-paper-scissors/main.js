const buttons = document.querySelectorAll('button')
const scoreForPlayer = document.querySelector('.scoreForPlayer')
const scoreForComputer = document.querySelector('.scoreForComputer')
const versus = document.querySelector('.versus')
const result = document.querySelector('.result')
const rock = document.querySelector('#Rock')
const paper = document.querySelector('#Paper')
const scissors = document.querySelector('#Scissors')

// fill player and computer with every button click
let player = ''
let computer = ''
let pScore = 0
let cScore = 0

function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissors']
  return choice[Math.floor(Math.random() * 3)]
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // clear selected button every time a new button is clicked
    buttons.forEach((btn) => {
      btn.classList.remove('selected')
    })

    e.target.classList.add('selected')
    player = e.target.id
    computer = getComputerChoice()

    if(computer === 'Rock') {
      rock.style.border = '16px solid #2f9472'
      paper.style.border = 'none'
      scissors.style.border = 'none'
    } else if(computer === 'Paper') {
      rock.style.border = 'none'
      paper.style.border = '16px solid #2f9472'
      scissors.style.border = 'none'
    } else if(computer === 'Scissors') {
      rock.style.border = 'none'
      paper.style.border = 'none'
      scissors.style.border = '16px solid #2f9472'
    }
    game()
  })
})

function playRound() {
  if(computer === 'Rock' && player === 'Paper' ||
     computer === 'Paper' && player === 'Scissors' ||
     computer === 'Scissors' && player === 'Rock') {
      pScore += 1
      result.innerText = 'Player Point!'
      winCondition()
     } else if (computer === player) {
      result.innerText = 'DRAW!'
     } else {
      cScore += 1
      result.innerText = 'Computer Point!'
      winCondition()
     }
}


function winCondition() {
  if(pScore === 5) {
    result.innerText = `YOU WIN!`
    result.style.color = '#ff8400'
    versus.style.display = 'none'
  } else if(cScore === 5) {
    result.innerText = 'COMPUTER WINS!'
    result.style.color = 'red'
    versus.style.display = 'none'
  }
}

function game() {
  playRound()
  scoreForPlayer.innerText = pScore
  scoreForComputer.innerText = cScore

  if(pScore === 5 || cScore === 5){
    document.querySelector('.btns').style.display = 'none'
    const rematch = document.createElement('button')
    rematch.classList.add('replay')
    rematch.innerText = 'PLAY AGAIN'
    document.querySelector('#container').appendChild(rematch)

    rematch.addEventListener('click', () => {
      location.reload()
    })
  }
}