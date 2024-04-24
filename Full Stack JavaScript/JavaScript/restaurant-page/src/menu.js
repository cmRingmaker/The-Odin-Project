import DOMUtils from './DOMUtils'

import Burger from './img/burger.png'
import Fries from './img/fries.png'
import Shake from './img/shake.png'

const menuItems = [
  {src: Burger, name: 'Hamburger'},
  {src: Fries, name: 'Fries'},
  {src: Shake, name: 'Chocolate Shake'}
]

export default function menu() {
  console.log('Menu.js working')
  const container = DOMUtils.createDiv('menu-container')
  
  menuItems.forEach((item) => {
    const menuItem = DOMUtils.createDiv('menu-item')
    const itemInfo = DOMUtils.createDiv('menu-info')
    const imgContainer = DOMUtils.createDiv('img-container')
    const menuImg = DOMUtils.createImage(item.src, 'menu-img', item.name)

    imgContainer.appendChild(menuImg)
    menuItem.append(itemInfo, imgContainer)
    container.appendChild(menuItem)
  })

  // Basic structure
  // ----------------------------------------------------
  // |                        div                       |
  // |                  -- menu-item --                 |
  // |  ---------------------------------------------   |
  // |  |        div        |           div         |   |
  // |  |  -- menu-info --  |  -- img-container --  |   |
  // |  |                   |                       |   |
  // |  |                   |        menuImg        |   |
  // |  |                   |                       |   |
  // |  |                   |                       |   |
  // |  |                   |                       |   |
  // |  ---------------------------------------------   |
  // ----------------------------------------------------

  content.appendChild(container)

  return container
}