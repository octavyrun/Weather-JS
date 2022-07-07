// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();
// Initialize weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

const ui = new UI();
// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city, state);
  storage.setLocationData(city, state);
  // Get and display weather

  getWeather();

  // Close Modal

  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
