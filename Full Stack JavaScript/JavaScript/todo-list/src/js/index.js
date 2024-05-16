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

window.addEventListener('load', loadTasks)

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

// TEST TO FILL 100 TASKS - REMOVE - REMOVE - REMOVE
const arr = ['low', 'medium', 'high']

for(let i = 0; i < 100; i++) {
  const words = `Task: ${i}`
  const prio = arr[Math.floor(Math.random() * arr.length)]

  const task = TODO.createTask(words, prio)

  taskList.appendChild(task)
}
// TEST TO FILL 100 TASKS - REMOVE - REMOVE - REMOVE

function formSubmit() {
  console.log(form.task.value)
  const taskContent = form.task.value
  const taskPriority = radioCheck()
  const task = TODO.createTask(taskContent, taskPriority)

  taskList.appendChild(task)

  const storage = JSON.parse(localStorage.getItem('tasks')) || []
  storage.push({content: taskContent, priority: taskPriority})
  localStorage.setItem('tasks', JSON.stringify(storage))
}

function radioCheck() {
  const selected = document.querySelector(`input[name='priority']:checked`)
  const selectedValue = selected ? selected.value : ''
  return selectedValue
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.forEach(task => {
    const taskElement = TODO.createTask(task.content, task.priority)
    taskList.appendChild(taskElement);
  });
}