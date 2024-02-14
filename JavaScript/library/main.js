const template = document.getElementById('template')
const container = document.getElementById('container')
const editBooks = document.getElementById('editBooks')
const addBooks = document.getElementById('addBooks')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeModal')
const bookPages = document.getElementById('bookPages')
const myForm = document.getElementById('myForm')
const submitForm = document.getElementById('submitForm')
const formError = document.getElementById('formError')

let content = template.content
let library = JSON.parse(localStorage.getItem('library')) || [] // initialize localstorage library

// -----------------------|
// -------------- CLASSES |
// -----------------------|

class Book {
  constructor(title = 'Unknown', author = 'Unknown', pages = '0', isRead = true) {
    this.title = title
    this.author = author
    this.pages = `${pages} pages`
    this.isRead = isRead ? 'Read' : 'Unread'
  }
}

// -----------------------|
// ------ EVENT LISTENERS |
// -----------------------|

// MODAL POPUP
addBooks.addEventListener('click', (e) => modal.showModal())
closeModal.addEventListener('click', (e) => {
  errorMessage() // handle error div
  modal.close()
})

bookPages.addEventListener('keydown', (e) => { // force numbers only
  if(/[0-9\-.]|Delete|Backspace/.test(e.key)) return
  e.preventDefault()
})

submitForm.addEventListener('click', (e) => {
  e.preventDefault()
  errorMessage() // handle error div

  const title = myForm.bookName.value
  const author = myForm.bookAuthor.value
  const pages = myForm.bookPages.value
  const isRead = myForm.readOrNot.value === 'yes'
  
  const newBook = new Book(title, author, pages, isRead)

  addNewBook(newBook)
})

// HANDLE EDITING SELECTED BOOK
editBooks.addEventListener('click', (e) => console.log('dummy data'))

// -----------------------|
// ------------ FUNCTIONS |
// -----------------------|

function renderPageLoad() {
  library.forEach(book => {    
    let div = template.content.cloneNode(true)

    div.querySelector('#cardTitle').textContent = book.title
    div.querySelector('#cardAuthor').textContent = book.author
    div.querySelector('#cardPages').textContent = book.pages
    div.querySelector('#cardRead').textContent = book.isRead

    container.append(div)
  })
}

function renderLatestBook() {
  checkLocalStorage()
  let latest = library.slice(-1)

  let div = template.content.cloneNode(true)

  div.querySelector('#cardTitle').textContent = latest[0].title
  div.querySelector('#cardAuthor').textContent = latest[0].author
  div.querySelector('#cardPages').textContent = latest[0].pages
  div.querySelector('#cardRead').textContent = latest[0].isRead

  container.append(div)
}

function errorMessage() {
  formError.style.visibility = 'hidden'
}
function updateLocalStorage() {
  localStorage.setItem('library', JSON.stringify(library))
}

function checkLocalStorage() {
  localStorage.getItem(JSON.parse(localStorage.getItem('library')))
}

function addNewBook(book) {
  // checkLocalStorage()

  let duplicate = library.find(b => 
    b.title === book.title &&
    b.author === book.author &&
    b.pages === book.pages &&
    b.isRead === book.isRead
  )

  if(!duplicate) {
    library.push(book)
    renderLatestBook()
    modal.close()
  } else {
    formError.style.visibility = 'visible'
  }

  updateLocalStorage()
}

renderPageLoad()