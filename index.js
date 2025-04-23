function handleSearchSubmit(event) {
  event.preventDefault(); // stops page refresh
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value; // update city text
  console.log(searchInput.value); // just for debugging
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
