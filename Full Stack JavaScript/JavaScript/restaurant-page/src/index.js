import about from './about'
import menu from './menu'
import order from './order'
import './style.css'

console.log('RUNNING!!')

// --------------------------------------------------------
// --------------------------------------------------------
// DOM ELEMENTS

const content = document.getElementById('content')
const navItems = document.querySelectorAll('nav > *')

const aboutBtn = document.getElementById('navAbout')
const menuBtn = document.getElementById('navMenu')
const orderBtn = document.getElementById('navOrder')

// --------------------------------------------------------
// --------------------------------------------------------
// EVENT LISTENERS

aboutBtn.addEventListener('click', () => renderTab(about, aboutBtn))
menuBtn.addEventListener('click', () => renderTab(menu, menuBtn))
orderBtn.addEventListener('click', () => renderTab(order, orderBtn))

// --------------------------------------------------------
// --------------------------------------------------------
// FUNCTIONS

about() // Default page and Tab selected
aboutBtn.classList.add('active') // --^

function renderTab(tabFunction, btnClicked) { // Get current tab selected & Highlight its corresponding button
  removeActive(btnClicked)
  btnClicked.classList.add('active')
  content.replaceChildren(tabFunction())
}

function removeActive(activeBtn) {
  navItems.forEach((btn) => {
    if(btn !== activeBtn) {
      btn.removeAttribute('class')
    }
  })
}
