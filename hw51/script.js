const apiUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "5d066958a60d315387d9492393935c19";
const city = "Kyiv";
const lang = "ua";

function getUrl(city, lang, apiKey) {
  return `${apiUrl}?q=${city}&units=metric&lang=${lang}&APPID=${apiKey}`;
}

function getWeather(url) {
  fetch(url)
    .then(response => response.json())
    .then(getInterface)
    .catch(getError);
}

function getInterface(data) {
  document.getElementById("city").textContent = data.name;
  document.getElementById("temp").textContent = data.main.temp;
  document.getElementById("pressure").textContent = data.main.pressure;
  document.getElementById("description").textContent = data.weather[0].description;
  document.getElementById("humidity").textContent = data.main.humidity;
  document.getElementById("speed").textContent = data.wind.speed;
  document.getElementById("deg").textContent = data.wind.deg;
  document.getElementById("icon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
}

function getError(error) {
  console.error("Error:", error);
}

document.addEventListener("DOMContentLoaded", () => {
  const weatherUrl = getUrl(city, lang, apiKey);

  getWeather(weatherUrl);
});