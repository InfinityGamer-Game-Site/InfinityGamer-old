let color1custom = "#000000";
let color2custom = "#FFFFFF";
let color3custom = "#AAAAAA";

const body = document.querySelector("body");
const styles = window.getComputedStyle(body);
color1custom = styles.getPropertyValue("--bg-color-" + savedTheme);
color2custom = styles.getPropertyValue("--link-color-" + savedTheme);
color3custom = styles.getPropertyValue("--text-color-" + savedTheme);

// Get the clock element
const mainClock = document.getElementById("main-clock");

// Function to update the clock time
function updateClock() {
  let currentDate = new Date();
  let currentTime = currentDate.toLocaleTimeString();

  // Update the clock text content
  mainClock.textContent = currentTime;
}
setInterval(updateClock, 100);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  console.log("Geolocation is not supported by this browser.");
}

function successCallback(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  fetch("https://api.weather.gov/points/" + latitude + "," + longitude)
    .then((response) => response.json())
    .then((data) => {
      const newURL = data.properties.forecastHourly;
      setTimeout(function () {
        fetch(newURL)
          .then((response) => response.json())
          .then((weatherData) => {
            let temp = weatherData.properties.periods[1].temperature;
            let weatherDesc = weatherData.properties.periods[1].shortForecast;
            let weatherImg = weatherData.properties.periods[1].icon.substring(0, weatherData.properties.periods[1].icon.length - 5) + "medium";
            document.getElementById("weatherdesc").textContent = weatherDesc;
            document.getElementById("temp").textContent = temp + "° F";
            document.getElementById("weathericon").src = weatherImg;
          });
      }, 1000);
    });
}

function errorCallback(error) {
  document.getElementById("temp").textContent =
    "Error getting current position: " + error.message;
}
