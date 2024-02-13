const template = document.getElementById('template')
const container = document.getElementById('container')
const editBooks = document.getElementById('editBooks')
const addBooks = document.getElementById('addBooks')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeModal')
const bookPages = document.getElementById('bookPages')
const myForm = document.getElementById('myForm')
const submitForm = document.getElementById('submitForm')

let library = []
let content = template.content

// -----------------------|
// -------------- CLASSES |
// -----------------------|

class Book {
  constructor(title = 'Unknown', author = 'Unknown', pages = '0', isRead = true) {
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

bookPages.addEventListener('keydown', (e) => { // force numbers only
  if(/[0-9\-.]|Delete|Backspace/.test(e.key)) return
  e.preventDefault()
})

submitForm.addEventListener('click', (e) => {
  e.preventDefault()

  const title = myForm.bookName.value
  const author = myForm.bookAuthor.value
  const pages = myForm.bookPages.value
  const isRead = myForm.readOrNot.value === 'yes'
  
  const newBook = new Book(title, author, pages, isRead)
  console.log(newBook)
  // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO 
  // put data into library - and don't allow a form submit without all values filled out!
})



// HANDLE EDITING SELECTED BOOK
editBooks.addEventListener('click', (e) => console.log('dummy data'))

// -----------------------|
// ------------ FUNCTIONS |
// -----------------------|

function render() {
  console.log('rendering')
}

function addNewBook() {
  const newBook = new Book(title, author, pages, isRead)
  library.push(newBook)
}

function updateLocalStorage() {
  localStorage.setItem('library', JSON.stringify(library))
}

function checkLocalStorage() {
  localStorage.getItem(library = JSON.parse(localStorage.getItem('library')))
}
