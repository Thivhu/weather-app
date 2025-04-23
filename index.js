function refreshWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature"); 
  let cityElement = document.querySelector("#city");

  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  temperatureElement.innerHTML = `${temperature}°C`;
  cityElement.innerHTML = city;
  console.log("City:", city);
  console.log("Temperature:", temperature);
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