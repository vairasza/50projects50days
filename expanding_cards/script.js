const panels = document.querySelectorAll(".panel")
const monitor_text = document.querySelector(".monitor-text")
const monitor_image = document.querySelector(".monitor-image")

panels.forEach(panel => panel.addEventListener('click', () => {
    removeClassList()
    panel.classList.add('active')

    monitor_text.innerHTML = panel.children[0].innerHTML
    monitor_image.setAttribute('style', "background-image: " + panel.style.backgroundImage)

}))

function removeClassList() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

