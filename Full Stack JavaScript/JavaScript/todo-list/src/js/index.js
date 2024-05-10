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

const taskList = document.getElementById('taskList')

// -------------------------
// EVENT LISTENERS


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