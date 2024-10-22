// timer
function updateTimer() {
    const date = new Date()
    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const seconds = date.getSeconds().toString().padStart(2, "0")

    const timer = document.getElementById('timer')
    timer.textContent = `${hours}:${minutes}:${seconds}`
}

setInterval(updateTimer, 1000)

const forms = document.getElementById("forms")

forms:addEventListener("submit",async (e)=>{
    e.preventDefault()

    try {
        const city_p = document.getElementById("city-name")
        const temp = document.getElementById("temp")
        const humidity = document.getElementById("humidity")

        const city = document.getElementById("weather").value

        const apiKEY = 'ed8e74438a1faf3620054e37423583a9'
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${apiKEY}&units=metric&lang=pt_br`

        const res = await fetch(apiURL)
        if(!res.ok){
            throw new Error('Não foi encontrado a cidade!')
        }

        const data = await res.json()

        city_p.textContent = `${data.name} - ${data.sys.country}`
        temp.textContent = `Temperatura: ${data.main.temp}ºC`
        humidity.textContent = `Umidade: ${data.main.humidity}%`


    } catch (e) {
        alert(e.message)
    }
})