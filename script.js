const movieSearchBox = document.getElementById("movie-search-box");
const movieCard = document.getElementById("movie-card");

function findMovies() {
  const searchTerm = movieSearchBox.value;
  fetch(`http://www.omdbapi.com/?s=${searchTerm}*&apikey=dd3f37db`)
    .then((response) => response.json())
    .then((movieResults) => {
      console.log(movieResults);
      // Object.keys(json).forEach((movieResult) => {
      //   const createMovieCard = document.createElement("div");
      //   createMovieCard.textContent = movieResult.title;
      //   movieCard.appendChild(createMovieCard);
      // });
    });
}
