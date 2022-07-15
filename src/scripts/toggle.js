let temperature = "celcius";

function celsOrFahr() {
  const toggle = document.getElementById("coding");
  toggle.addEventListener("click", () => {
    temperature === "celcius"
      ? (temperature = "fahrenheit")
      : (temperature = "celcius");
  });
}

/// hmm need to think about this... this would work only after acquiring data
function convertCtoF(data) {
  if (temperature === "celcius") {
    return data;
  } else {
  }
}

export { celsOrFahr, temperature };
