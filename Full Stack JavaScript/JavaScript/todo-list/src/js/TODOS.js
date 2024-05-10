export default class TODO {
  static createTask(taskContent) {
    const div = document.createElement('div')
    div.classList.add('task')
    
    div.innerText = taskContent

    return div
  }
}
