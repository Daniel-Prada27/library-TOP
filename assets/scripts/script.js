const book = document.querySelector(".book-card");
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
