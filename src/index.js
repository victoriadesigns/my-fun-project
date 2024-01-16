let displayedDate = document.querySelector("#displayedtime");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

displayedDate.innerHTML = `${day} ${hours}:${minutes}`;

function displayCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#typed-city");
  let displayedCity = document.querySelector("#displayedcity");
  displayedCity.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", displayCity);


function displayTemp(response){
  let tempElement = document.querySelector("#current-temp");
  let temp = Math.round (response.data.temperature.current);
}

let searchStuff = document.querySelector("typed-city");
let apiKey = "4454f13co397b7eaaf38b607eb9367t6"
let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${searchStuff.value}&key=${apiKey}'

axios.get(apiUrl).then(displayTemp);
