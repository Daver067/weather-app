import { currentLocation } from "..";
import { renderDom } from "./domRendering";

let temperature = "celcius";

function celsOrFahr() {
  const toggle = document.getElementById("coding");
  toggle.addEventListener("click", () => {
    temperature === "celcius"
      ? (temperature = "fahrenheit")
      : (temperature = "celcius");
    renderDom(currentLocation);
  });
}

/// hmm need to think about this... this would work only after acquiring data
function convertToProperTemp(data) {
  if (temperature === "celcius") {
    let convertedAmount = (data - 273.15).toFixed(1);
    convertedAmount += "\u00B0 C";
    return convertedAmount;
  } else if (temperature === "fahrenheit") {
    let convertedAmount = ((data - 273.15) * (9 / 5) + 32).toFixed(1);
    convertedAmount += "\u00B0 F";

    return convertedAmount;
  }
}

export { convertToProperTemp, temperature, celsOrFahr };
