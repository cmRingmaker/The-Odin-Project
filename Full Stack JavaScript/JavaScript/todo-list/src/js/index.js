/* ==================================================================
    - - - - - - - - - - [ GLOBALS ]
   ==================================================================
    - - [ imports, dom elements, event listeners ]
    * description
   ================================================================== */

// -------------------------
// IMPORT
import '../css/style.css'
import '../css/reset.css'
import TODO from './TODOS'
import NAV from './NAV'

// -------------------------
// DOM ELEMENTS

const taskList = document.getElementById('task-list')
const createNew = document.getElementById('createNew')
const modal = document.getElementById('modal')
const form = document.getElementById('form')

// -------------------------
// EVENT LISTENERS
createNew.addEventListener('click', () => createTodo())
form.addEventListener('submit', () => formSubmit())

/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    - - [ main.js function ]
    * replace %FUNCTIONS with the functions focus and delete this line
    * description
   ================================================================== */

const nav = new NAV()

function createTodo() {
  modal.showModal()
  console.log('modal??')
}

function formSubmit() {
  console.log(form.task.value)
  const task = TODO.createTask(form.task.value, radioCheck())

  taskList.appendChild(task)
}

function radioCheck() {
  const selected = document.querySelector(`input[name='priority']:checked`)
  const selectedValue = selected ? selected.value : ''
  return selectedValue

}