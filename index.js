function refreshWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature"); 
  let cityElement = document.querySelector("#city");
let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#time");
let date=new Date(response.data.time * 1000); 

  console.log(response.data); 

  temperatureElement.innerHTML = `${temperature}°C`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  descriptionElement.innerHTML = response.data.condition.description;
 timeElement.innerHTML = formatDate(date);
  windSpeedElement.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  cityElement.innerHTML = city;
}
function formatDate(date) {
let minutes=date.getMinutes();
let hours=date.getHours();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}
return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "22d4f626oa48d358284ae0abda032etc"; 
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeatherData);
}
function handleSearchSubmit(event) {
  event.preventDefault(); // Stops page refresh
  let searchInput = document.querySelector("#search-form-input");
  let city = searchInput.value;
 let cityElement = document.querySelector("#city"); 
  cityElement.innerHTML = searchInput.value;  
searchCity(searchInput.value); // 
}

// Add event listener to the form
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("New York"); // Default city