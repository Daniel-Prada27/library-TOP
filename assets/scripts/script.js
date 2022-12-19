const book = document.querySelectorAll(".book-card");
const popup = document.getElementById("popup");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const body = document.getElementById("body");
const readUi = document.querySelectorAll(".readUI");
const newCard = document.createElement("div");
const lib = document.querySelector(".book-section");

const form = document.querySelector(".form");
const bookTitle = document.getElementById("bookTitle");
const authorName = document.getElementById("authorName");
const readCheck = document.getElementById("readCheck");
const submitBtn = document.getElementById("submitBtn");
const inputField = document.querySelectorAll(".input");

let bookCounter = book.length -1;

function Book(title, author) {
    this.title = title;
    this.author = author;
}

addBtn.addEventListener("click", (e) => {
    if (popup.style.visibility === "visible") {
        body.click();
    } else {
        popup.style.cssText ="transform: translate(-50%, -50%) scale(1); visibility: visible; transition: 0.2s ease-in;"
        body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        e.stopPropagation();
    }

});

submitBtn.addEventListener("click", () => {
    popup.style.cssText ="transform: translate(-50%, -50%) scale(0.1); visibility: hidden; transition: 0.2s ease-out;"
    body.style.backgroundColor = "rgba(0, 0, 0, 0)";
})

deleteBtn.addEventListener("click", () => {
    if (popup.style.visibility === "visible") {
        body.click();
    } else {
        for (let i = 0; i < book.length; i++) {
            if (book[i].style.border === "2px solid black") {
                book[i].style.border = "none";
                lib.removeChild(book[i]);
            }
        }
    }

})

for (let i = 0; i < inputField.length; i++){
    inputField[i].addEventListener("click", (e) => {
        e.stopPropagation();
    })
}

popup.addEventListener("click", (e) => {
    e.stopPropagation();
})

function setReadId() {

    for (let i = 0; i < readUi.length; i++) {
        readUi[i].id = `readUi-${i}`;
        let currentRead = readUi[i];
        currentRead.addEventListener("click", (e) => {
            e.stopPropagation();
            if (popup.style.visibility === "visible") {
                body.click();
            } else {
                if (currentRead.style.backgroundColor === "rgb(159, 255, 156)") {
                    currentRead.style.backgroundColor = "#e58c8c"
                } else {
                    currentRead.style.cssText = "background-color: #9fff9c";
                }
            }

    
        })
    }
}
function setBooksId() {
    for (let i = 0; i < book.length; i++) {
        book[i].id = `book-${i}`;
        let currentBook = book[i];
        currentBook.addEventListener("click", () => {
            if (popup.style.visibility === "visible") {
                body.click();
            } else {
                if (currentBook.style.border === "2px solid black"){
                    currentBook.style.cssText = "border: none;";
                }else {
                    currentBook.style.cssText = "border: 2px solid black;";
                }
            }

    
        })
    }
}




body.addEventListener("click", () => {
    if (popup.style.visibility == "visible") {
        popup.style.cssText = "transform: translate(-50%, -50%) scale(0.1); visibility: hidden;";
        body.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
})

form.addEventListener("submit", function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

  
    // Log the data object to the console
    console.log(data);
  });


setBooksId();
setReadId();
// newCard.className = "book-card";
// lib.appendChild(newCard);