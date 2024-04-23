export default class DOMUtils {
  static createDiv(className) {
    const div = document.createElement('div')
    div.classList.add(className)
    return div
  }


  static createElementWithContent(tagName, content, className) {
    // Create Element
    const element = document.createElement(tagName)
    // Populate Content
    element.textContent = content
    // Add className
    element.classList.add(className)
    return element
  }

  static createImage(src, className, alt) {
    const img = new Image()
    img.src = src
    img.alt = alt
    img.classList.add(className)
    return img
  }


}