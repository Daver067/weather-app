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
}
export { cityWeather };
