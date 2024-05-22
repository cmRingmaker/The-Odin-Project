export default class PROJECT {
  static createProject(projectName) {
    const menuProject = document.getElementById('menu-project')
    // Create new Project
    const li = document.createElement('li')
    li.innerText = projectName

    menuProject.appendChild(li)
    return li
  }
}