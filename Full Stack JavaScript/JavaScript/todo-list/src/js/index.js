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
import PROJECT from './PROJECT'

// -------------------------
// DOM ELEMENTS

// Task / Forms
const taskList = document.getElementById('task-list')
const createNew = document.getElementById('createNew')
const modal = document.getElementById('modal')
const form = document.getElementById('form')


// Groups
const projectGroups = document.getElementById('menu-project')
const newProject = document.getElementById('new-project')
const projectModal = document.getElementById('projectModal')
const projectForm = document.getElementById('projectForm')

// -------------------------
// EVENT LISTENERS
createNew.addEventListener('click', () => createTodo())
form.addEventListener('submit', () => formSubmit())
newProject.addEventListener('click', () => createProject())
projectForm.addEventListener('submit', () => projectFormSubmit())


window.addEventListener('load', () => {
  loadTasks()
  loadGroups()
})

// -------------------------
// GLOBALS
const nav = new NAV()

/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    - - [ main.js function ]
    * replace %FUNCTIONS with the functions focus and delete this line
    * description
   ================================================================== */

function createTodo() {
  modal.showModal()
  console.log('modal??')
}

function createProject() {
  projectModal.showModal()
  console.log('project modal???')
}




// TEST TO FILL 100 TASKS - REMOVE - REMOVE - REMOVE
// const arr = ['low', 'medium', 'high']
// const projArr = ['All Projects', 'cool beansaaaaaa', 'jhsdfg']
// const timeArr = ['2024-30-4', '2011-24-8', '3069-42-11' ]

// for(let i = 0; i < 100; i++) {
//   const words = `Task: ${i}`
//   const prio = arr[Math.floor(Math.random() * arr.length)]
//   const proj = projArr[Math.floor(Math.random() * projArr.length)]
//   const ttime = timeArr[Math.floor(Math.random() * timeArr.length)]

//   const task = TODO.createTask(words, prio, proj, ttime)

//   taskList.appendChild(task)
// }
// TEST TO FILL 100 TASKS - REMOVE - REMOVE - REMOVE





function formSubmit() {
  console.log(form.task.value)
  const taskContent = form.task.value
  const taskPriority = radioCheck()
  const selectedProject = document.getElementById('dropdown').value
  const taskDate = form.time.value
  const task = TODO.createTask(taskContent, taskPriority, selectedProject, taskDate)

  taskList.appendChild(task)

  const storage = JSON.parse(localStorage.getItem('tasks')) || []
  storage.push({content: taskContent, priority: taskPriority, project: selectedProject, time: taskDate})
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
    const taskElement = TODO.createTask(task.content, task.priority, task.project, task.time)
    taskList.appendChild(taskElement);
  });
}

function loadGroups() {
  const groups = JSON.parse(localStorage.getItem('groups')) || []
  groups.forEach(group => {
    const groupElement = PROJECT.createProject(group.content)
    projectGroups.appendChild(groupElement)

    populateDropdown(group.content)
  })
}

function projectFormSubmit() {
  console.log(projectForm.projectName.value)
  const projectContent = projectForm.projectName.value
  const newProjectElement = PROJECT.createProject(projectContent)

  newProjectElement.addEventListener('click', () => {
    nav.activeGroup('project', newProjectElement)
    nav.filterTasks('project', projectContent)
  })
  
  const storage = JSON.parse(localStorage.getItem('groups')) || []
  storage.push({content: projectContent})
  localStorage.setItem('groups', JSON.stringify(storage))

  populateDropdown(projectContent)
  projectForm.reset()
}

function populateDropdown(groupContent) {
  const op = document.createElement('option')
  op.value = groupContent
  op.textContent = groupContent
  dropdown.appendChild(op)
}