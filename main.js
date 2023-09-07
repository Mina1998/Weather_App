let cityName = document.querySelector("#city-name");
let temp = document.querySelector(".temp");
let wind = document.querySelector(".wind-speed");
let humidity = document.querySelector(".humidity");
let search = document.querySelector("#search-icon");

const apiKey = "81ee54a786b33f447fbdea8d472b447a";

async function getWeather() {
    console.log(cityName.value)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`;
    let data = await fetch(apiUrl);
    var response = await data.json();
    console.log(response);
    temp.innerHTML = `${response.main.temp}°C`;
    document.querySelector(".city").innerHTML = cityName.value.toUpperCase();
    wind.innerHTML = `${response.wind.speed}KM/H`;
    humidity.innerHTML = response.main.humidity;
    cityName.value = "";
}