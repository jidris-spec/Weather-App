const apiKey = "086a62f5aa6a20faed761c0c8949140b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind ").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "clouds") {
      weatherIcon.src = "cloudy.jpg";
    } else if (data.weather[0].main == "clear") {
      weatherIcon.src = "clear.jpg";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "Rain.jpg";
    } else if (data.weather[0].main == "drizzle") {
      weatherIcon.src = "drizzle.jpg";
    } else if (data.weather[0].main == "Moist") {
      weatherIcon.src = "moist.jpg";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
