const movieSearchBox = document.getElementById("movie-search-box");

function findMovies() {
  const searchTerm = movieSearchBox.value;
  const resultsGrid = document.getElementById("result-grid");
  if (searchTerm.length > 2) {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}*&apikey=dd3f37db`)
      .then((response) => response.json())
      .then((movieResults) => {
        movieResults.Search.forEach((movie) => {
          const movieCard = document.createElement("div");
          movieCard.classList.add("movie-card");
          resultsGrid.append(movieCard);

          const moviePoster = document.createElement("img");
          moviePoster.classList.add("movie-cover");
          moviePoster.src = movie.Poster;
          movieCard.append(moviePoster);

          const movieTitle = document.createElement("h3");
          movieTitle.classList.add("movie-title");
          movieTitle.append(movie.Title);
          movieCard.append(movieTitle);

          const movieYear = document.createElement("h4");
          movieYear.classList.add("movie-year");
          movieYear.append(` (${movie.Year})`);
          movieCard.append(movieYear);

          console.log(movie);
        });
      })
      .catch((error) => console.log(error));
  }
}
