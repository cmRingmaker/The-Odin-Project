export default class TODO {
  static createTask(taskContent, taskPriority) {
    const div = document.createElement('div')
    div.classList.add('task')
    div.innerText = taskContent

    const project = document.createElement('div')
    project.classList.add('project')

    // CHANGE THIS TO TAKE IN ACCOUNT WHICH CURRENT TASK HAS PRIORITY, AND USE ITS COLOR!
    // prio.style.backgroundColor = taskPriority

    project.innerText = taskContent
    
    div.appendChild(project)
    return div
  }
}
