import DOMUtils from './DOMUtils'

import Burger from './img/burger.png'
import Fries from './img/fries.png'
import Shake from './img/shake.png'

const menuItems = [
  // Create images from DOMUtils
  {src: Burger, name: 'Hamburger'},
  {src: Fries, name: 'Fries'},
  {src: Shake, name: 'Chocolate Shake'}
]

const menuData = [
  // Create Data from DOMUtils
  {tagName: 'span', content: `Fake Review 1 \n -Review Man`, className: 'about-review'},
  {tagName: 'span', content: `Fake Review 2 \n -Review Woman`, className: 'about-review'},
  {tagName: 'span', content: `Fake Review 3 \n -Review Boy`, className: 'about-review'},
]

export default function menu() {
  console.log('Menu.js working')
  const container = DOMUtils.createDiv('menu-container')
  
  menuItems.forEach((item, index) => {
    const menuItem = DOMUtils.createDiv('menu-item')
    const itemInfo = DOMUtils.createDiv('menu-info')
    const imgContainer = DOMUtils.createDiv('img-container')
    const menuImg = DOMUtils.createImage(item.src, 'menu-img', item.name)

    container.appendChild(menuItem)
    menuItem.append(itemInfo, imgContainer)
    imgContainer.appendChild(menuImg)

    // Test text for info in menu section ---
    if(menuData[index]) {
      const review = DOMUtils.createElementWithContent(menuData[index].tagName, menuData[index].content, menuData[index].className)
      itemInfo.appendChild(review)
    }

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