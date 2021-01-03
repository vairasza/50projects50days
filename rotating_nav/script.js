const open = document.getElementById("open")
const close = document.getElementById("close")
const cont = document.querySelector(".container")

open.addEventListener("click", () => {
    cont.classList.add("show_nav")
})

close.addEventListener("click", () => {
    cont.classList.remove("show_nav")
})