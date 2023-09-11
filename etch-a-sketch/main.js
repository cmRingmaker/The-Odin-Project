buttons = document.querySelectorAll('.pixel')
const grid = document.querySelector('.grid')
const color = document.querySelector('#colorPicker')
const eraser = document.querySelector('.erase')

// chosenColor is updated in sessionStorage, default is black
let chosenColor = '#000000'
sessionStorage.setItem('color', chosenColor)

color.addEventListener('input', (e) => {
  chosenColor = color.value
  // Save color in session storage to persist choices through loads
  sessionStorage.setItem('color', chosenColor)
})

createGrid(16, 16) //default grid size
let gridSize = 16

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if(e.target.classList.contains('small')) {
      gridSize = 16
    }else if(e.target.classList.contains('medium')) {
      gridSize = 64
    }else if(e.target.classList.contains('large')) {
      gridSize = 100
    }

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
    div.addEventListener('mouseover', fillCell)
    div.addEventListener('mousedown', fillCell)
    grid.appendChild(div).className = 'grid-item'
  }
}

function clear() {
  grid.innerHTML = ''
}

document.querySelector('.clear').addEventListener('click', (e) => {
  clear()
  gridSelect()
})

function fillCell(e) {
  if(e.type === 'mouseover' && !mouseDown) return
  // Get color from session storage
  e.target.style.backgroundColor = sessionStorage.getItem('color')
}