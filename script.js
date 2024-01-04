const movieSearchBox = document.getElementById("movie-search-box");
const movieCard = document.getElementById("movie-card");

function findMovies() {
  const searchTerm = movieSearchBox.value;
  if (searchTerm.length > 2) {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}*&apikey=dd3f37db`)
      .then((response) => response.json())
      .then((movieResults) => {
        movieResults.Search.forEach((movie) => {
          const movieCard = (document.createElement("div").className =
            "movie-card");
          const resultsGrid = document.getElementById("results-grid");
        });
      })
      .catch((error) => console.log(error));
  }
}
