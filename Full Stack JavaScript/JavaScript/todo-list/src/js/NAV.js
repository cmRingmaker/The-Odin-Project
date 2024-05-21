export default class NAV {
  constructor() {
    this.taskList = document.getElementById('task-list')
    this.sidebar = document.getElementById('sidebar')
    this.menuTask = document.getElementById('menu-tasks').querySelectorAll('li')
    this.menuPrio = document.getElementById('menu-priority').querySelectorAll('li')
    this.menuProject = document.getElementById('menu-project').querySelectorAll('li')
    this.sidebarToggle = document.getElementById('sidebar-toggle')
    this.sidebarButton = document.getElementById('sidebar-button')
    this.initEventListeners()
  }

  initEventListeners() {

    window.matchMedia('(max-width: 1290px').addEventListener('change', () => this.toggleSidebar())

    this.menuTask.forEach((group) => {
      group.addEventListener('click', () => {
        this.activeGroup('tasks', group)
        this.filterTasks('date', group.innerText)
      })
    })
  
    this.menuPrio.forEach((group) => {
      group.addEventListener('click', () => {
        this.activeGroup('priority', group)
        this.filterTasks('priority', group.innerText)
      })
    })
  
    this.menuProject.forEach((group) => {
      group.addEventListener('click', () => {
        this.activeGroup('project', group)
        this.filterTasks('project', group.innerText)
      })
    })
    
    this.sidebarToggle.addEventListener('click', () => this.toggleSidebar())

    const menuProjectContainer = document.getElementById('menu-project')
    menuProjectContainer.addEventListener('DOMNodeInserted', (e) => {
      if(e.target.nodeName === 'LI') {
        this.menuProject = document.getElementById('menu-project').querySelectorAll('li')
        e.target.addEventListener('click', () => {
          this.activeGroup('project', e.target)
          this.filterTasks('project', e.target.innerText)
        })
      }
    })
  }

  activeGroup(groupName, targetElement) {
    const groups = {
      'tasks': this.menuTask,
      'priority': this.menuPrio,
      'project': this.menuProject
    }
  
    const groupElements = groups[groupName]
  
    groupElements.forEach(element => {
      element.classList.remove('active')
    })
  
    targetElement.classList.add('active')
  }
  
  toggleSidebar(){
    if(this.sidebar.classList.contains('show-sidebar')) {
      this.sidebar.classList.remove('show-sidebar')
      this.sidebar.classList.add('hide-sidebar')
      this.sidebarButton.checked = true // To force the burger menu to change state
    } else {
      this.sidebar.classList.remove('hide-sidebar')
      this.sidebar.classList.add('show-sidebar')
      this.sidebarButton.checked = false
    }
  }

  filterTasks(filterType, filterValue) {
    const tasks = this.taskList.querySelectorAll('.task')
    const today = new Date()
    const todayDate = today.toISOString().slice(0, 10) // Get today's date in YYYY-MM-DD format

    console.log(time)
    tasks.forEach(task => {
      let shouldHide = false

      const taskTime = task.querySelector('.taskTime').innerText
      const taskDate = new Date(taskTime)
      const taskDateString = taskDate.toISOString().slice(0, 10)
      console.log(taskTime, taskDateString)
  
      // Apply multiple filters at once
      const activeTaskFilter = Array.from(this.menuTask).find(li => li.classList.contains('active'))
      const activePriorityFilter = Array.from(this.menuPrio).find(li => li.classList.contains('active'))
      const activeProjectFilter = Array.from(this.menuProject).find(li => li.classList.contains('active'))
      const activeDateFilter = filterValue
      
      // if (activeTaskFilter && activeTaskFilter.innerText !== 'All Tasks' && !task.innerText.includes(activeTaskFilter.innerText)) {
      //   shouldHide = true
      // }


      if (filterType === 'tasks') {
        if (activeTaskFilter && activeTaskFilter.innerText !== 'All Tasks' && !task.innerText.includes(activeTaskFilter.innerText)) {
          shouldHide = true
        }
      }
      
      if (activePriorityFilter && activePriorityFilter.innerText !== 'All Priorities' && !task.querySelector('span').classList.contains(activePriorityFilter.innerText.toLowerCase())) {
        shouldHide = true
      }
      
      if (activeProjectFilter && activeProjectFilter.innerText !== 'All Projects' && !task.querySelector('.project').innerText.includes(activeProjectFilter.innerText)) {
        shouldHide = true
      }

      if(filterType === 'date') {
        // Filter for today's tasks
        if (filterValue === 'Daily' && taskDateString !== todayDate) {
          shouldHide = true
        }

        // Filter for tasks within the current week
        if (filterValue === 'Weekly') {
          const oneWeekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
          const oneWeekFromTodayString = oneWeekFromToday.toISOString().slice(0, 10)
          if (taskDateString < todayDate || taskDateString >= oneWeekFromTodayString) {
            shouldHide = true
          }
        }
      }


  
      task.style.display = shouldHide ? 'none' : 'flex'
    })
  }

}





















// TODO: (heh)
// FILTER OUT DAILY/WEEKLY BASED ON USER INPUT