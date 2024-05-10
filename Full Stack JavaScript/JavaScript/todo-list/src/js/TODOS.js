export default class TODO {
  static createItem(className) {
    const div = document.createElement('div')
    div.classList.add(className)
    return div
  }
}
