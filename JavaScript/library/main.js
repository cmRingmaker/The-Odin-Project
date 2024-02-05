const template = document.getElementById('template')
const container = document.getElementById('container')
const editBooks = document.getElementById('editBooks')
const addBooks = document.getElementById('addBooks')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeModal')

let library
let content = template.content

// -----------------------|
// -------------- CLASSES |
// -----------------------|

class Book {
  constructor(title = 'Unknown', author = 'Unknown', pages = '0', isRead = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }
}

// -----------------------|
// ------ EVENT LISTENERS |
// -----------------------|

// MODAL POPUP
addBooks.addEventListener('click', (e) => modal.showModal())
closeModal.addEventListener('click', (e) => modal.close())

// HANDLE EDITING SELECTED BOOK
editBooks.addEventListener('click', (e) => console.log('dummy data'))


// -----------------------|
// ------------ FUNCTIONS |
// -----------------------|


function addNewBook() {
  const newBook = new Book(title.value, author.value, pages.value, isRead.value)
  library.push(newBook)
}

function updateLocalStorage() {
  localStorage.setItem('library', JSON.stringify(library))
}

function checkLocalStorage() {
  localStorage.getItem(library = JSON.parse(localStorage.getItem('library')))
}