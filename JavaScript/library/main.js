// HEADER
const header = document.getElementById('header')

// MAIN CONTENT
const container = document.getElementById('container')
const template = document.getElementById('template')
const cards = document.getElementsByClassName('card')

// MODAL
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeModal')
const myForm = document.getElementById('myForm')
const bookPages = document.getElementById('bookPages')
const submitForm = document.getElementById('submitForm')
const formError = document.getElementById('formError')
const bookDelete = document.getElementById('bookDelete')

// FOOTER
const editBooks = document.getElementById('editBooks')
const addBooks = document.getElementById('addBooks')

// GLOBALS                                  
let library = JSON.parse(localStorage.getItem('library')) || []   // initialize localstorage library
const headerDefault = header.innerHTML                            // default header state
const headerChange = header.classList.contains('editModeHeader')  // edit header state
let isEditMode = false                                            // edit mode
let isHeaderEditMode = false                                      // header edit mode
let originalTitle                                                 // save original title and author for editing divs & localstorage
let originalAuthor                                                // <--^

// -----------------------|
// -------------- CLASSES |
// -----------------------|

class Book {
  constructor(title = 'Unknown', author = 'Unknown', pages = 0, isRead = true) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead ? 'Read' : 'Unread'
  }
}

class Card {
  constructor(book, template) {
    this.book = book
    this.template = template

    // Create card element
    this.element = template.content.cloneNode(true)

    // Add data-title attribute
    this.element.querySelector('.card').dataset.title = book.title

    // Populate data
    this.setTitle(book.title)
    this.setAuthor(book.author)
    this.setPages(book.pages)
    this.setRead(book.isRead)
  }

  // Methods
  setTitle  = (title) =>  this.element.querySelector('#cardTitle').textContent = title
  setAuthor = (author) => this.element.querySelector('#cardAuthor').textContent = author
  setPages  = (pages) =>  this.element.querySelector('#cardPages').textContent = pages
  setRead   = (read) =>   this.element.querySelector('#cardRead').textContent = read
}

// -----------------------|
// ------ EVENT LISTENERS |
// -----------------------|

// MODAL POPUP
addBooks.addEventListener('click', (e) => {
  modal.showModal()
  bookDelete.style.visibility = 'hidden'
})

closeModal.addEventListener('click', (e) => {
  errorMessage() // handle error div
  modal.close()
})

bookPages.addEventListener('keydown', (e) => { // force numbers only
  if(/[0-9\-.]|Delete|Backspace/.test(e.key)) return
  e.preventDefault()
})

submitForm.addEventListener('click', (e) => {
  if(isEditMode) {
    const title = myForm.bookName.value
    const author = myForm.bookAuthor.value
    const pages = myForm.bookPages.value
    const isRead = myForm.readOrNot.value === 'yes'

    const ind = library.findIndex(book => 
      book.title === originalTitle && book.author === originalAuthor
    )

    // set localstorage values to our new values
    library[ind].title = title
    library[ind].author = author
    library[ind].pages = pages
    library[ind].isRead = isRead ? 'Read' : 'Unread'

    updateLocalStorage()
    updateHeader()
    
  } else {
    e.preventDefault()
    errorMessage() // handle error div
  
    const title = myForm.bookName.value
    const author = myForm.bookAuthor.value
    const pages = myForm.bookPages.value
    const isRead = myForm.readOrNot.value === 'yes'
    
    const newBook = new Book(title, author, pages, isRead)
  
    addNewBook(newBook)
    updateHeader()
  }




})

editBooks.addEventListener('click', toggleEditMode)

bookDelete.addEventListener('click', deleteBook)

// -----------------------|
// ------------ FUNCTIONS |
// -----------------------|

function renderPageLoad() {
  updateHeader()

  library.forEach(book => {
    const card = new Card(book, template)
    container.appendChild(card.element)
  })
}

function renderLatestBook() {
  const latest = library.slice(-1)[0]
  const card = new Card(latest, template)
  container.appendChild(card.element)
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

function updateHeader() {
  if(isHeaderEditMode) return
  const headerBooks = document.getElementById('bks')
  const headerBooksRead = document.getElementById('bksread')
  const headerPages = document.getElementById('pgs')
  const headerPagesRead = document.getElementById('pgsread')

  const readItems = library.filter((book) => book.isRead === 'Read')
  const getTotalPages = library.reduce((acc, c) => acc + Number(c.pages), 0)
  const readPages = readItems.reduce((acc, c) => acc + Number(c.pages), 0)

  headerBooks.textContent = `Books: ${library.length}`
  headerBooksRead.textContent = `Books Read: ${readItems.length}`
  headerPages.textContent = `Total Pages: ${getTotalPages}`
  headerPagesRead.textContent = `Pages Read: ${readPages}`
}

function toggleEditMode() {
  isEditMode = !isEditMode
  console.log(`EDIT MODE === ${isEditMode}`)
  return (isEditMode) ? enterEditMode() : exitEditMode()
}

function enterEditMode() {
  isHeaderEditMode = true
  header.classList.add('editModeHeader')
  header.innerHTML = '<h1>EDITING MODE</h1>'
  addBooks.classList.add('editDisableAdd')
  bookDelete.style.visibility = 'visible'  
  handleCardEdit()
}

function exitEditMode() {
  isHeaderEditMode = false
  header.innerHTML = headerDefault
  header.removeAttribute('class')
  addBooks.removeAttribute('class')
  handleCardEdit()
  updateHeader()
}

function editCard(e) {
  const title = e.currentTarget.querySelector('#cardTitle').textContent
  const author = e.currentTarget.querySelector('#cardAuthor').textContent
  const pages = e.currentTarget.querySelector('#cardPages').textContent
  const isRead = e.currentTarget.querySelector('#cardRead').textContent

  editOpenModal(title, author, pages, isRead)
}


function handleCardEdit() {
  for(let card of cards) {
    if(isEditMode) {
      card.classList.add('editMode')
      card.addEventListener('click', editCard)
    } else {
      card.classList.remove('editMode')
      card.removeEventListener('click', editCard)
    }
  }
}

function editOpenModal(title, author, pages, isRead) {
  // keep track of original un-edited params
  originalTitle = title
  originalAuthor = author

  myForm.bookName.value = title
  myForm.bookAuthor.value = author
  myForm.bookPages.value = pages
  myForm.readOrNot.value = isRead

  if(isRead === 'Read') {
    myForm.readOrNot.value = 'yes'
  } else {
    myForm.readOrNot.value = 'no'
  }

  if(isEditMode) {
    modal.showModal()
  }

  updateHeader()
}

function deleteBook() {
  const title = myForm.bookName.value
  const author = myForm.bookAuthor.value

  // Get book div that is clicked on in our library
  const index = library.findIndex((book) => {
    return book.title === title && book.author === author
  })

  if(index !== -1) {    
    // query card
    const card = container.querySelector(`[data-title="${title}"]`)
    
    // remove card if found
    if(card) {
      card.remove()
    }

    library.splice(index, 1)
    updateLocalStorage()
  }

  modal.close()
  updateHeader()
}



renderPageLoad()