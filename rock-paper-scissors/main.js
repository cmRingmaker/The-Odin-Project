function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissors']
  return choice[Math.floor(Math.random() * 3)]
}

function playRound(computer, player) {
  if(computer === 'Rock' && player === 'Paper' ||
     computer === 'Paper' && player === 'Scissors' ||
     computer === 'Scissors' && player === 'Rock') {
      return `You win! ${player} beats ${computer}.`
     } else if (computer === player) {
      return 'Draw!'
     } else {
       return `You lose! ${computer} beats ${player}.`
     }
}

function game() {
  for(let i = 0; i < 5; i++) {
    let player = prompt('Please type R, P, or S to choose between Rock, Paper, or Scissors').toLowerCase()
    let choice = ''
  
    switch (player) {
      case 'r': choice = 'Rock';     break;
      case 'p': choice = 'Paper';    break;
      case 's': choice = 'Scissors'; break;
      default: return 'Please choose between Rock, Paper, or Scissors'
    }

    console.log(playRound(getComputerChoice(), choice))
  }
}