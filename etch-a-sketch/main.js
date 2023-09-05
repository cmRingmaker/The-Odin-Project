buttons = document.querySelectorAll('.pixel')

const grid = document.querySelector('.grid')

createGrid(16, 16)
let gridSize = 16

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if(e.target.classList.contains('small')) {
      gridSize = 16
    }else if(e.target.classList.contains('medium')) {
      gridSize = 64
    }else if(e.target.classList.contains('large')) {
      gridSize = 100
    }

    console.log(gridSize)
    clear()
    gridSelect()
  })
})

function gridSelect() {
  switch(gridSize) {
    case 16:  createGrid(16, 16);   break;
    case 64:  createGrid(64, 64);   break;
    case 100: createGrid(100, 100); break;
  }
}

function createGrid(rows, cols) {
  grid.style.setProperty('--grid-rows', rows)
  grid.style.setProperty('--grid-cols', cols)
  let cells = rows * cols

  for(let i = 0; i < cells; i++) {
    let div = document.createElement('div')
    grid.appendChild(div).className = 'grid-item'
  }
}

function clear() {
  grid.innerHTML = ''  
}