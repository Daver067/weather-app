import { celsOrFahr } from "./scripts/toggle";
import "./style.scss";

(function addListenerToSubmit() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const Location = getLocationData();
    const weatherInfo = getWeatherData(Location);
  });
})();

function getLocationData() {
  const formData = new FormData(document.forms.form);
  const location = formData.get("location");
  return location;
}

async function getWeatherData(location) {
  let weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=eca235609988118b53bb8dd9a90783c4&units=metric`,
    { mode: "cors" }
  );
  weatherData = await weatherData.json();
  const MyInfo = filterToUseableData(weatherData);
  updateDom(MyInfo);
}

function filterToUseableData(Data) {
  let returnData = {};
  returnData.city = Data.name;
  returnData.weatherDescription = Data.weather[0].description;
  returnData.currentTemp = Data.main.temp;
  returnData.maxTemp = Data.main.temp_max;
  returnData.windSpeed = Data.wind.speed;
  returnData.windDirection = Data.wind.deg;
  return returnData;
}

function updateDom(data) {
  console.log(`update dom this this info: `);
  console.log(data);
}
celsOrFahr();

//eca235609988118b53bb8dd9a90783c4
