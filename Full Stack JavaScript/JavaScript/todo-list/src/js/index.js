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

// -------------------------
// DOM ELEMENTS

const taskList =    document.getElementById('task-list')
const menuTask =    document.getElementById('menu-tasks').querySelectorAll('li')
const menuPrio =    document.getElementById('menu-priority').querySelectorAll('li')
const menuProject = document.getElementById('menu-project').querySelectorAll('li')

// -------------------------
// EVENT LISTENERS

menuTask.forEach((group) => {
  group.addEventListener('click', () => activeGroup('tasks', group))
})

menuPrio.forEach((group) => {
  group.addEventListener('click', () => activeGroup('priority', group))
})

menuProject.forEach((group) => {
  group.addEventListener('click', () => activeGroup('project', group))
})


/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    - - [ main.js function ]
    * replace %FUNCTIONS with the functions focus and delete this line
    * description
   ================================================================== */


// const task1 = TODO.createTask('mothafucka')

// content.appendChild(task1)

for(let i = 1; i < 35; i++) {
  const task = TODO.createTask(`task ${i}`)
  
  taskList.appendChild(task)
}


function activeGroup(groupName, targetElement) {
  const groups = {
    'tasks': menuTask,
    'priority': menuPrio,
    'project': menuProject
  }

  const groupElements = groups[groupName]

  groupElements.forEach(element => {
    element.classList.remove('active')
    element
  })

  targetElement.classList.add('active')
}