/* eslint-disable semi */
const book = document.querySelectorAll('.book-card');
const popup = document.getElementById('popup');
const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');
const body = document.getElementById('body');
const readUi = document.querySelectorAll('.readUI');
const lib = document.querySelector('.book-section');


const form = document.querySelector('.form');
const bookTitle = document.getElementById('bookTitle');
const authorName = document.getElementById('authorName');
const readCheck = document.getElementById('readCheck');
const submitBtn = document.getElementById('submitBtn');
const inputField = document.querySelectorAll('.input');

const bookArray = [].slice.call(book);
const readUiArray = [].slice.call(readUi);

let bookCounter = book.length - 1;

function Book (title, author, readen) {
  this.title = title;
  this.author = author;
  this.readen = readen;
}

addBtn.addEventListener('click', (e) => {
  if (popup.style.visibility === 'visible') {
    body.click();
  } else {
    popup.style.cssText = 'transform: translate(-50%, -50%) scale(1); visibility: visible; transition: 0.2s ease-in;';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    e.stopPropagation();
  }
})

submitBtn.addEventListener('click', () => {
  popup.style.cssText = 'transform: translate(-50%, -50%) scale(0.1); visibility: hidden; transition: 0.2s ease-out;';
  body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
})

deleteBtn.addEventListener('click', () => {
  if (popup.style.visibility === 'visible') {
    body.click();
  } else {
    for (let i = 0; i < bookArray.length; i++) {
      if (bookArray[i].style.border === '2px solid black') {
        bookArray[i].style.border = 'none';
        lib.removeChild(bookArray[i]);
      }
    }
  }
})

for (let i = 0; i < inputField.length; i++) {
  inputField[i].addEventListener('click', (e) => {
    e.stopPropagation();
  })
}

popup.addEventListener('click', (e) => {
  e.stopPropagation();
})

function setBookId (givenBook) {
  givenBook.addEventListener('click', () => {
    if (popup.style.visibility === 'visible') {
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
  const readConfirmation = currentRead.querySelector("#readOrNot");
  currentRead.addEventListener('click', (e) => {
    e.stopPropagation();
    if (popup.style.visibility === 'visible') {
      body.click();
    } else {
      if (currentRead.style.backgroundColor === 'rgb(159, 255, 156)') { //read
        currentRead.style.backgroundColor = '#e58c8c'; // not read
        readConfirmation.innerHTML = "Not read"
      } else {
        currentRead.style.cssText = 'background-color: #9fff9c'; // read
        readConfirmation.innerHTML = "Read"
      }
    }
  })
}

body.addEventListener('click', () => {
  if (popup.style.visibility === 'visible') {
    popup.style.cssText = 'transform: translate(-50%, -50%) scale(0.1); visibility: hidden;';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
})

form.addEventListener('submit', function (event) {
  // Prevent the form from being submitted
  event.preventDefault();
  const newBookName = bookTitle.value;
  const newBookAuthor = authorName.value;
  const verifyRead = readCheck.checked;
  console.log(verifyRead);
  const newBook = new Book(newBookName, newBookAuthor, verifyRead);
  bookCounter++;
  const readUiNewID = `readUi-${bookCounter}`;
  const newCard = document.createElement('div');
  newCard.className = 'book-card';
  newCard.id = `book-${bookCounter}`;

  if (verifyRead === true) {
  newCard.innerHTML = `<p>${newBook.title}</p><p>${newBook.author}</p> <div class= "readUI newUI" id=${readUiNewID}> <p id="readOrNot">Read</p></div>`;
  const actualCheck = newCard.querySelector(`#${readUiNewID}`);
  actualCheck.style.backgroundColor = "rgb(159, 255, 156)";
  } else if (verifyRead === false) {
    newCard.innerHTML = `<p>${newBook.title}</p><p>${newBook.author}</p> <div class= "readUI newUI" id=${readUiNewID}> <p id="readOrNot">Not Read</p></div>`;
    const actualCheck = newCard.querySelector(`#${readUiNewID}`);
    actualCheck.style.backgroundColor = "rgb(229, 140, 140)";
  }


//   newCard.innerHTML = `<p>${newBook.title}</p><p>${newBook.author}</p> <div class= "readUI newUI" id=${readUiNewID}> <p>Read / Unread</p></div>`;
  lib.appendChild(newCard);
  bookArray.push(newCard);
  readUiArray.push(newCard.querySelector('.newUI'));
  setBookId(newCard);
  setReadId();
  return newBook;
})
