const apiUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "5d066958a60d315387d9492393935c19";
const city = "Kyiv";
const lang = "UA";

function sendAjax({ url, method = "GET", data = null, success, error }) {
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    const response = xhr.responseText;

    if (typeof response === "string") {
      success(JSON.parse(response));
      return;
    }

    success(response);
  };

  xhr.onerror = error;

  xhr.open(method, url);
  method === "GET" ? xhr.send() : xhr.send(data);
}

sendAjax({
  url: `${apiUrl}?q=${city}&units=metric&lang=${lang}&APPID=${apiKey}`,
  success: (data) => {
    document.getElementById("city").textContent = data.name;
    document.getElementById("temp").textContent = data.main.temp;
    document.getElementById("pressure").textContent = data.main.pressure;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("speed").textContent = data.wind.speed;
    document.getElementById("deg").textContent = data.wind.deg;

    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    document.getElementById('icon').src = iconUrl;
  },
  error: () => {
    console.error('Error');
  }
});

