export default class NAV {
  constructor() {
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
      group.addEventListener('click', () => this.activeGroup('tasks', group))
    })
    
    this.menuPrio.forEach((group) => {
      group.addEventListener('click', () => this.activeGroup('priority', group))
    })
    
    this.menuProject.forEach((group) => {
      group.addEventListener('click', () => this.activeGroup('project', group))
    })
    
    this.sidebarToggle.addEventListener('click', () => this.toggleSidebar())
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
}
