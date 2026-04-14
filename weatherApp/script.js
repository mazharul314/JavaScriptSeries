const apiKey = config.apiKey;
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function getWeather(city) {

    const response = await fetch(apiUrl + city);
    const data = await response.json();
    console.log(data);

    weatherIcon.src = data.current.condition.icon;
    document.querySelector('.temp').innerHTML = data.current.temp_c + "°C" + " / " + data.current.temp_f + "°F";
    document.querySelector('.weatherDescription').innerHTML = data.current.condition.text;
    document.querySelector('.city').innerHTML = data.location.name + ", " + data.location.country;
    document.querySelector('.humidity').innerHTML = data.current.humidity + "%";
    document.querySelector('.wind').innerHTML = data.current.wind_kph + "km/h";
    document.querySelector('.localTime').innerHTML = data.location.localtime;
}

searchBtn.addEventListener("click", () => {
    if (searchBox.value === "") {
        alert("Please enter a city");
    } else {
        getWeather(searchBox.value);
    }
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getWeather(searchBox.value);
        event.preventDefault();
   }  
})