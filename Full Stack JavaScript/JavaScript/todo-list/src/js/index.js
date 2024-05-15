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

const taskList =    document.getElementById('task-list')

// -------------------------
// EVENT LISTENERS


/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    - - [ main.js function ]
    * replace %FUNCTIONS with the functions focus and delete this line
    * description
   ================================================================== */

const nav = new NAV()

for(let i = 1; i < 35; i++) {
  const task = TODO.createTask(`task ${i}`)
  
  taskList.appendChild(task)
}