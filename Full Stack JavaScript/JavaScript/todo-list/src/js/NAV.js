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
        this.filterTasks('tasks', group.innerText)
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

  filterTasks() {
    const taskElements = this.taskList.querySelectorAll('.task');
    const selectedDateOption = Array.from(this.menuTask).find(li => li.classList.contains('active')).innerText;
    const selectedPriorityOption = Array.from(this.menuPrio).find(li => li.classList.contains('active')).innerText;
    const selectedProjectOption = Array.from(this.menuProject).find(li => li.classList.contains('active')).innerText;
    const userSelectedDate = this.getUserSelectedDate(selectedDateOption)
  
    taskElements.forEach(taskElement => {
      const taskDate = taskElement.querySelector('.taskTime').innerText
      const taskPriority = taskElement.querySelector('span').classList.value
      const taskProject = taskElement.querySelector('.project').innerText
  
      const shouldShowTask =
        (selectedDateOption === 'All Tasks' || (selectedDateOption === 'Daily' && this.isToday(taskDate, userSelectedDate)) || (selectedDateOption === 'Weekly' && this.isThisWeek(taskDate, userSelectedDate))) &&
        (selectedPriorityOption === 'All Priorities' || taskPriority.includes(selectedPriorityOption.toLowerCase())) &&
        (selectedProjectOption === 'All Projects' || taskProject === selectedProjectOption)
  
      taskElement.style.display = shouldShowTask ? 'flex' : 'none'
    })
  }

  getUserSelectedDate(selectedDateOption) {
    if (selectedDateOption === 'Daily') {
      return new Date().toISOString().slice(0, 10)
    } else if (selectedDateOption === 'Weekly') {
      const today = new Date()
      return today.toISOString().slice(0, 10)
    } else {
      return null
    }
  }

  isToday(dateString, userSelectedDate) {
    const today = new Date(userSelectedDate)
    const taskDate = new Date(dateString)
  
    if (isNaN(taskDate.getTime())) {
      return false
    }
  
    return today.toDateString() === taskDate.toDateString()
  }

  isThisWeek(dateString, userSelectedDate) {
    const today = new Date(userSelectedDate)
    const taskDate = new Date(dateString)
    
    if (isNaN(taskDate.getTime())) {
      return false
    }

    // Calculate the end date which is today + 6 days
    const endOfWeek = new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000)
  
    // Check if taskDate is within the adjusted range (today + 6 days)
    return taskDate >= today && taskDate <= endOfWeek
  }

}