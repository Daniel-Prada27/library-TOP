const book = document.querySelectorAll(".book-card");
const popup = document.getElementById("popup");
const submitBtn = document.getElementById("submitBtn");
const addBtn = document.getElementById("addBtn");
const body = document.getElementById("body");

addBtn.addEventListener("click", () => {
    popup.style.cssText ="transform: translate(-50%, -50%) scale(1); visibility: visible; transition: 0.2s ease-in;"
    body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

submitBtn.addEventListener("click", () => {
    popup.style.cssText ="transform: translate(-50%, -50%) scale(0.1); visibility: hidden; transition: 0.2s ease-out;"
    body.style.backgroundColor = "rgba(0, 0, 0, 0)";
})



for (let i = 0; i < book.length; i++) {
    book[i].id = `book-${i}`;
    let currentBook = book[i];
    book[i].addEventListener("click", () => {
        if (currentBook.style.border === "2px solid black"){
            currentBook.style.cssText = "border: none;";
        }else {
            currentBook.style.cssText = "border: 2px solid black;";
        }

    })
}