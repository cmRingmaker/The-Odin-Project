export default class TODO {
  static createTask(taskContent, taskPriority) {
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

    project.innerText = taskContent
    
    div.append(priority, project)
    return div
  }
}
