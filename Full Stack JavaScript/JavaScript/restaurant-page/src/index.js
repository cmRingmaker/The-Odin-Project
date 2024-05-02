import about from './about'
import menu from './menu'
import contact from './contact'
import './style.css'

console.log('RUNNING!!')

// --------------------------------------------------------
// --------------------------------------------------------
// DOM ELEMENTS

const content = document.getElementById('content')
const navItems = document.querySelectorAll('nav > *')

const aboutBtn = document.getElementById('navAbout')
const menuBtn = document.getElementById('navMenu')
const contactBtn = document.getElementById('navContact')

// --------------------------------------------------------
// --------------------------------------------------------
// EVENT LISTENERS

aboutBtn.addEventListener('click', () => renderTab(about, aboutBtn))
menuBtn.addEventListener('click', () => renderTab(menu, menuBtn))
contactBtn.addEventListener('click', () => renderTab(contact, contactBtn))

// --------------------------------------------------------
// --------------------------------------------------------
// FUNCTIONS

contact() // Default page and Tab selected
contactBtn.classList.add('active') // --^

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
