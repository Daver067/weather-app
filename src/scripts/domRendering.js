import { convertToProperTemp } from "./toggle";

let city = document.getElementById("city");
let weatherDescription = document.getElementById("weatherDescription");
let currentTemp = document.getElementById("currentTemp");
let windSpeed = document.getElementById("windSpeed");
let windDirection = document.getElementById("windDirection");
let maxTemp = document.getElementById("maxTemp");

function renderDom(cityClass) {
  city.textContent = cityClass.city;
  weatherDescription.textContent = cityClass.weatherDescription;
  currentTemp.textContent = convertToProperTemp(cityClass.currentTemp);
  maxTemp.textContent = convertToProperTemp(cityClass.maxTemp);
  windSpeed.textContent = `${cityClass.windSpeed} km/hr`;
  windDirection.textContent = degToCompass(cityClass.windDirection);
}

function degToCompass(num) {
  var val = Math.floor(num / 22.5 + 0.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
}

export { renderDom };
