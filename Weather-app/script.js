const apiKey = "89c13ea938871f343abc1e564db2d8f9"
const btn = document.getElementById('btn');
const search_value = document.getElementById('search');
const form = document.getElementById('container__form')
const main = document.getElementById('container__main')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    getWeatherByLocation(search_value.value);
    search_value.value = '';
})

async function getWeatherByLocation(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    const data = await response.json();

    // console.log(data.main.temp);

    var dta = document.createElement("div");
    var sec = document.createElement("div");
    var icon = document.createElement("div");

    sec.classList.add("sec");
    main.appendChild(sec);

    dta.classList.add("data");

    dta.innerHTML = `
        <h1>${data.name}</h1>
        <h3>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</h1>
    `
    icon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />`

    sec.appendChild(dta);
    sec.append(icon);
}

// console.log(form);

// console.log(search_value);
// getWeatherByLocation()