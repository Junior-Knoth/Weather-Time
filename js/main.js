

function updateTimer() {
    const date = new Date()
    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const seconds = date.getSeconds().toString().padStart(2, "0")

    const timer = document.getElementById('timer')
    timer.textContent = `${hours}:${minutes}:${seconds}`

}

setInterval(updateTimer, 1000)