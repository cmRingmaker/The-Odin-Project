import DOMUtils from './DOMUtils'

import Burger from './img/burger.webp'
import Fries from './img/fries.webp'
import Shake from './img/shake.webp'
import Tenders  from './img/tendies.webp'

const menuItems = [
  {
    src: Burger,
    name: `Bamburger`,
    description: `A delicious and juicy hamburger made with fresh ingredients and our top secret Bam-Sauce!`,
    ingredients: `100% Beef Patty, Hamburger Bun, Mayonaise, Lettuce, Onion, Tomato, Ketchup, and Cheddar Cheese`,
    calories: `940 Calories`
  },
  {
    src: Fries,
    name: 'Bam Fries',
    description: `Golden and crispy fries made from the finest locally sourced potatoes.`,
    ingredients: `Potato, Black Pepper`,
    calories: `320 Calories`
  },
  {
    src: Tenders,
    name: `Chicky Tenders`,
    description: `Juicy and tender chicken tenders, perfectly breaded and fried to a golden crisp.`,
    ingredients: `Chicken Breast, Breading (Flour, Eggs, Breadcrumbs, Spices)`,
    calories: `720 Calories`
  },
  {
    src: Shake,
    name: `Wham-Bam Shake`,
    description: `Thick and creamy chocolate shake made with premium ice cream with crunched up bits of freshly baked chocolate chip cookies.`,
    ingredients: `Chocolate Ice Cream, Milk, Chocolate Syrup, Whipped Cream, and a Chocolate Cookie`,
    calories: `1080 Calories`
  },
]

export default function menu() {
  console.log('Menu.js working')
  const container = DOMUtils.createDiv('menu-container')
  
  menuItems.forEach((item) => {
    const menuItem = DOMUtils.createDiv('menu-item')
    const itemInfo = DOMUtils.createDiv('menu-info')
    const imgContainer = DOMUtils.createDiv('img-container')
    const menuImg = DOMUtils.createImage(item.src, 'menu-img', item.name)

    const itemName = DOMUtils.createElementWithContent('h2', item.name, 'item-name')
    const itemDesc = DOMUtils.createElementWithContent('p', item.description, 'item-description')
    const itemIngredients = DOMUtils.createElementWithContent('p', item.ingredients, 'item-ingredients')
    const itemCalories = DOMUtils.createElementWithContent('span', item.calories, 'item-calories')

    container.appendChild(menuItem)
    menuItem.append(itemInfo, imgContainer)
    itemInfo.append(itemName, itemDesc, itemIngredients, itemCalories)
    imgContainer.appendChild(menuImg)
    
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