function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("input[name='search']");
  if (searchInput) {
    console.log("Search term:", searchInput.value);
  } else {
    console.error("Search input element not found.");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  let searchFormElement = document.querySelector("#search-form");
  if (searchFormElement) {
    searchFormElement.addEventListener("submit", handleSearchSubmit);
  } else {
    console.error("Search form element not found.");
  }
});
