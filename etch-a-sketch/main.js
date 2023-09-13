buttons = document.querySelectorAll('.pixel')
const grid = document.querySelector('.grid')
const color = document.querySelector('#colorPicker')
const rainbow = document.querySelector('.rainbow')
const eraser = document.querySelector('.erase')
const modeChoiceText = document.querySelector('.modeChoice')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let chosenColor = color.value // updated in sessionStorage
let currentMode = 'colorMode'
sessionStorage.setItem('color', chosenColor)
createGrid(16, 16) //default grid size
let gridSize = 16

rainbow.addEventListener('click', (e) => {
  currentMode = 'rainbowMode'
  modeChoiceText.innerText = 'Rainbow Mode!'
})

color.addEventListener('input', (e) => {
  chosenColor = color.value
  // Save color in session storage to persist choices through loads
  sessionStorage.setItem('color', chosenColor)
})

// secondary event listener for mode selection
color.addEventListener('click', (e) => {
  currentMode = 'colorMode'
  modeChoiceText.innerText = 'Color Mode!'
})

eraser.addEventListener('click', (e) => {
  currentMode = 'eraserMode'
  modeChoiceText.innerText = 'Eraser Mode!'
})

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
    div.addEventListener('mouseover', modeSelect)
    div.addEventListener('mousedown', modeSelect)
    grid.appendChild(div).className = 'grid-item'
  }
}

function clear() {
  grid.innerHTML = ''
}

function fillRainbow(e) {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  if(e.type === 'mouseover' && !mouseDown) return
  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function fillColor(e) {
  if(e.type === 'mouseover' && !mouseDown) return
  e.target.style.backgroundColor = sessionStorage.getItem('color')
}

function erase(e) {
  if(e.type === 'mouseover' && !mouseDown) return
  e.target.style.backgroundColor = 'rgb(199, 199, 199)'
}

function modeSelect(e) {
  switch(currentMode) {
    case 'rainbowMode': fillRainbow(e); break;
    case 'colorMode'  : fillColor(e);   break;
    case 'eraserMode' : erase(e);       break;
  }
}

// Reset everything!
document.querySelector('.clear').addEventListener('click', (e) => {
  clear()
  gridSelect()
})