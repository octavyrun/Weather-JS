class Weather {
  constructor(city, state) {
    this.apiKey = `0381decaedfbff651b31da11806d8410`;
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }

  // Change location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
