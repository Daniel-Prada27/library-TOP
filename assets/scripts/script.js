/* eslint-disable semi */
const book = document.querySelectorAll('.book-card');
const popup = document.getElementById('popup');
// const themeBtn = document.getElementById('theme');
const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');
const searchBtn = document.getElementById('searchBtn');
const body = document.getElementById('body');
const readUi = document.querySelectorAll('.readUI');
const lib = document.querySelector('.book-section');
const notFound = document.createElement('p');

const form = document.querySelector('.form');
const bookTitle = document.getElementById('bookTitle');
const authorName = document.getElementById('authorName');
const readCheck = document.getElementById('readCheck');
const submitBtn = document.getElementById('submitBtn');
const inputField = document.querySelectorAll('.input');

const searchPopup = document.getElementById('search-popup');
const searchForm = document.querySelector('.search-form');
const searchTitle = document.getElementById('searchTitle');
const searchAuthor = document.getElementById('searchAuthor');
const searchBtnForm = document.getElementById('searchBtn-Form');
let validateFormClose = false;

const bookArray = [].slice.call(book);
const readUiArray = [].slice.call(readUi);

const bookCollection = [];

let bookCounter = book.length - 1;

function Book (title, author, read, bookID) {
  this.title = title;
  this.author = author;
  this.read = read;
  this.bookID = bookID;
}

addBtn.addEventListener('click', (e) => {
  if (popup.style.visibility === 'visible' || searchPopup.style.visibility === 'visible') {
    body.click();
  } else {
    popup.style.cssText = 'transform: translate(-50%, -50%) scale(1); visibility: visible; transition: 0.2s ease-in;';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    form.reset();
    e.stopPropagation();
  }
})

submitBtn.addEventListener('click', () => {
  popup.style.cssText = 'transform: translate(-50%, -50%) scale(0.1); visibility: hidden; transition: 0.2s ease-out;';
  body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
})

deleteBtn.addEventListener('click', () => {
  if (popup.style.visibility === 'visible' || searchPopup.style.visibility === 'visible') {
    body.click();
  } else {
    for (let i = 0; i < bookArray.length; i++) {
      if (bookArray[i].style.border === '2px solid black') {
        bookArray[i].style.border = 'none';
        lib.removeChild(bookArray[i]);
        bookArray[i] = null;
        bookCollection[i] = null;
      }
    }
  }
})

searchBtn.addEventListener('click', (e) => {
  if (searchPopup.style.visibility === 'visible' || popup.style.visibility === 'visible') {
    body.click();
  } else {
    searchPopup.style.cssText = 'transform: translate(-50%, -50%) scale(1); visibility: visible; transition: 0.2s ease-in;';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    e.stopPropagation();
  }
  try {
    searchForm.removeChild(notFound);
  } catch (error) {
    console.log('oops');
  }
  searchForm.reset();
})

for (let i = 0; i < inputField.length; i++) {
  inputField[i].addEventListener('click', (e) => {
    e.stopPropagation();
  })
}

popup.addEventListener('click', (e) => {
  e.stopPropagation();
})

searchPopup.addEventListener('click', (e) => {
  e.stopPropagation();
})

searchBtnForm.addEventListener('click', () => {
  if (validateFormClose === true) {
    searchPopup.style.cssText = 'transform: translate(-50%, -50%) scale(0.1); visibility: hidden; transition: 0.2s ease-out;';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    try {
      searchForm.removeChild(notFound);
    } catch (error) {
      console.log('oops');
    }
  }

  validateFormClose = false;
})

function setBookId (givenBook) {
  givenBook.addEventListener('click', () => {
    if (popup.style.visibility === 'visible' || searchPopup.style.visibility === 'visible') {
      body.click();
    } else {
      if (givenBook.style.border === '2px solid black') {
        givenBook.style.cssText = 'border: none;';
      } else {
        givenBook.style.cssText = 'border: 2px solid black;';
      }
    }
  })
}

function setReadId () {
  const currentRead = readUiArray[readUiArray.length - 1];
  const readConfirmation = currentRead.querySelector('#readOrNot');
  currentRead.addEventListener('click', (e) => {
    e.stopPropagation();
    if (popup.style.visibility === 'visible' || searchPopup.style.visibility === 'visible') {
      body.click();
    } else {
      if (currentRead.style.backgroundColor === 'rgb(159, 255, 156)') { // read
        currentRead.style.backgroundColor = '#e58c8c'; // not read
        readConfirmation.innerHTML = 'Not read'
      } else {
        currentRead.style.cssText = 'background-color: #9fff9c'; // read
        readConfirmation.innerHTML = 'Read'
      }
    }
  })
}

body.addEventListener('click', () => {
  if (popup.style.visibility === 'visible' || searchPopup.style.visibility === 'visible') {
    popup.style.cssText = 'transform: translate(-50%, -50%) scale(0.1); visibility: hidden;';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
  if (searchPopup.style.visibility === 'visible' || searchPopup.style.visibility === 'visible') {
    searchPopup.style.cssText = 'transform: translate(-50%, -50%) scale(0.1); visibility: hidden;';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
})

form.addEventListener('submit', function (event) {
  // Prevent the form from being submitted
  event.preventDefault();

  for (let i in bookArray) {
    if (bookArray[i].children[i].innerHTML === bookTitle.value ) {
        console.log("Book already exists");
        return
    }
  }

  const newBookName = bookTitle.value;
  const newBookAuthor = authorName.value;
  const verifyRead = readCheck.checked;
  const bookID = `book-${bookCounter + 1}`;
  const newBook = new Book(newBookName, newBookAuthor, verifyRead, bookID);
  bookCounter++;
  const readUiNewID = `readUi-${bookCounter}`;
  const newCard = document.createElement('div');
  newCard.className = 'book-card';
  newCard.id = `book-${bookCounter}`;

  if (verifyRead === true) {
    newCard.innerHTML = `<p translate="no">${newBook.title}</p><p translate="no">${newBook.author}</p> <div class= "readUI newUI" id=${readUiNewID}> <p id="readOrNot">Read</p></div>`;
    const actualCheck = newCard.querySelector(`#${readUiNewID}`);
    actualCheck.style.backgroundColor = 'rgb(159, 255, 156)';
  } else if (verifyRead === false) {
    newCard.innerHTML = `<p translate="no">${newBook.title}</p><p translate="no">${newBook.author}</p> <div class= "readUI newUI" id=${readUiNewID}> <p id="readOrNot">Not Read</p></div>`;
    const actualCheck = newCard.querySelector(`#${readUiNewID}`);
    actualCheck.style.backgroundColor = 'rgb(229, 140, 140)';
  }

  //   newCard.innerHTML = `<p>${newBook.title}</p><p>${newBook.author}</p> <div class= "readUI newUI" id=${readUiNewID}> <p>Read / Unread</p></div>`;
  lib.appendChild(newCard);
  bookArray.push(newCard);
  readUiArray.push(newCard.querySelector('.newUI'));
  setBookId(newCard);
  setReadId();
  bookCollection.push(newBook)
  addToStorage(newCard.outerHTML, newCard);
  return newBook;
})

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let titleSearch = searchTitle.value;
  let authorSearch = searchAuthor.value;
  
 if (titleSearch === '' && authorSearch === '') {
    body.click();
    return;
 } else {
    if (titleSearch === '') {
        titleSearch = null;
    }
    if (authorSearch === '') {
        authorSearch = null;
    }
 }

  let checkedBook;
  let checkedAuthorBook;
  let findStatus = false;

  for (let i in bookCollection) {

    if (bookArray[i] === null) {
        continue;
    }

    checkedBook = bookCollection[i].title;
    checkedAuthorBook = bookCollection[i].author;
    if (checkedBook.includes(titleSearch)) {
        console.log("yup");
      console.log(bookCollection[i]);
      findStatus = true;
      validateFormClose = true;
      const bookFound = document.getElementById(`${bookCollection[i].bookID}`);
      bookFound.style.border = '2px solid black';
    } else if (checkedAuthorBook.includes(authorSearch)) {
        findStatus = true;
        validateFormClose = true;
        const bookFound = document.getElementById(`${bookCollection[i].bookID}`);
        bookFound.style.border = '2px solid black';
    } else {
        const notMatch = document.getElementById(`${bookCollection[i].bookID}`)
        notMatch.style.border = 'none';
    }
  }

  if (findStatus === false) {
    console.log('la');
    notFound.textContent = 'Not found';
    searchForm.appendChild(notFound);
    validateFormClose = false;
  }
  searchBtnForm.click();
})


// function filterRead() {
    // ADD A TOGGLE TO FILTER READ OR UNREAD BOOKS
// }


function addToStorage(completeBookCard, bookCard) {
    localStorage.setItem(`${bookCard.id}`, completeBookCard);
    console.log(`Book ${bookCard.id} was added to local storage`);
}
