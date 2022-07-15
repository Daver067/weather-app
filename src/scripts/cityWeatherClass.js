// I dont think I actually need this.

class cityWeather {
  constructor(
    city,
    weatherDescription,
    currentTemp,
    maxTemp,
    windSpeed,
    windDirection
  ) {
    this.city = city;
    this.weatherDescription = weatherDescription;
    this.currentTemp = currentTemp;
    this.maxTemp = maxTemp;
    this.windSpeed = windSpeed;
    this.windDirection = windDirection;
  }

  get city() {
    return this.city;
  }
  get weatherDescription() {
    return this.weatherDescription;
  }
  get currentTemp() {
    return this.currentTemp;
  }
  get maxTemp() {
    return this.maxTemp;
  }
  get windSpeed() {
    return this.windSpeed;
  }
  get windDirection() {
    return this.windDirection;
  }
}
