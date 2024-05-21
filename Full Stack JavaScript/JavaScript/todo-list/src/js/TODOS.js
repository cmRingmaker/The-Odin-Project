export default class TODO {
  static createTask(taskContent, taskPriority, projectName, taskDate) {
    // Create new Task
    const div = document.createElement('div')
    div.classList.add('task')
    div.innerText = taskContent

    // Create a fake ::before with a span to change colors to indicate priority
    const priority = document.createElement('span')
    priority.classList.add(taskPriority)

    // Create Project Header inside Task div
    const project = document.createElement('div')
    project.classList.add('project')
    project.innerText = projectName || 'All Projects'

    const time = document.createElement('div')
    time.classList.add('taskTime')
    time.innerText = taskDate || ''

    
    div.append(priority, project, time)
    return div
  }
}
