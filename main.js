let cityName = document.querySelector("#city-name");
let temp = document.querySelector(".temp");
let wind = document.querySelector(".wind-speed");
let humidity = document.querySelector(".humidity");
let search = document.querySelector("#search-icon");

const apiKey = "81ee54a786b33f447fbdea8d472b447a";

async function getWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`;
    let data = await fetch(apiUrl);
    var response = await data.json();

    if (data.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else if (data.status == 200) {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        // console.log(response);
        temp.innerHTML = `${Math.round(response.main.temp)}°C`;
        document.querySelector(".city").innerHTML = cityName.value.toUpperCase();
        wind.innerHTML = `${response.wind.speed}KM/H`;
        humidity.innerHTML = response.main.humidity;
        cityName.value = "";
    
        let weatherIcon = document.querySelector(".weather-icon");
        if (response.weather[0].main === "Clouds") {
            weatherIcon.setAttribute("src", "images/clouds.png")
        } else if (response.weather[0].main === "Clear") {
            weatherIcon.setAttribute("src", "images/clear.png")
        } else if (response.weather[0].main === "Drizzle") {
            weatherIcon.setAttribute("src", "images/drizzle.png")
        } else if (response.weather[0].main === "Mist") {
            weatherIcon.setAttribute("src", "images/mist.png")
        } else if (response.weather[0].main === "Rain") {
            weatherIcon.setAttribute("src", "images/rain.png")
        } else if (response.weather[0].main === "Snow") {
            weatherIcon.setAttribute("src", "images/snow.png")
        }
    }
}