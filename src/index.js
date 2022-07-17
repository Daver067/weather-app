import "./style.scss";

import { cityWeather } from "./scripts/cityWeatherClass";
import { renderDom } from "./scripts/domRendering";
import { celsOrFahr } from "./scripts/toggle";
import { changeBackground } from "./scripts/backgroundChanger";

let currentLocation = null;

getWeatherData("Vancouver");

(function addListenerToSubmit() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const Location = getLocationData();
    getWeatherData(Location);
  });
})();

function getLocationData() {
  const formData = new FormData(document.forms.form);
  const location = formData.get("location");
  return location;
}

async function getWeatherData(location) {
  try {
    let weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=eca235609988118b53bb8dd9a90783c4`,
      { mode: "cors" }
    );

    weatherData = await weatherData.json();

    changeBackground(weatherData.weather[0].id);
    const cityClass = filterToUseableData(weatherData);
    currentLocation = cityClass;
    renderDom(cityClass);
  } catch (err) {
    console.log(err);
    return;
  } finally {
  }
}

function filterToUseableData(Data) {
  let cityAndCountry = `${Data.name}, ${Data.sys.country}`;
  let cityWeatherClass = new cityWeather(
    cityAndCountry,
    Data.weather[0].description,
    Data.main.temp,
    Data.main.temp_max,
    Data.wind.speed,
    Data.wind.deg
  );
  return cityWeatherClass;
}

celsOrFahr();
//eca235609988118b53bb8dd9a90783c4

export { currentLocation };
