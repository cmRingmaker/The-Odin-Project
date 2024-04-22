export default function menu() {
  console.log('Menu.js working')

  const content = document.getElementById('content')
  const container = document.createElement('div')
  const h2 = document.createElement('h2')

  // const menuImg = new Image()
  // menuImg.className = 'menu-img'
  // menuImg.src = 'Menu'

  content.appendChild(container).className = 'menu-container'

  return container
}