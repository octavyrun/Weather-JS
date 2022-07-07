class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.humidity = document.getElementById("w-humidty");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
    this.majuscule = function (string) {
      return string.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      });
    };
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = this.majuscule(weather.weather[0].description);
    this.string.textContent =
      (weather.main.temp - 273.15).toFixed(2) + "\u00B0";
    this.humidity.textContent = `Umiditatea: ${weather.main.humidity}%`;
    let tempResimtita =
      (weather.main.feels_like - 273.15).toFixed(2) + "\u00B0";
    this.feelsLike.textContent = `Temperatura resimtita: ${tempResimtita}`;

    this.wind.textContent = `Viteza vantului: ${weather.wind.speed}[km/h]`;
  }
}

UI.prototype;
