const panels = document.querySelectorAll(".panel")

panels.forEach(i => i.addEventListener("click", () => {
    removeActiveClasses()
    i.classList.add("active")
}))

function removeActiveClasses() {
    panels.forEach(i => i.classList.remove("active"))
}

