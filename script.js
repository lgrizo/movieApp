function searchClick() {
  console.log("clicked");
}

const movieSearchBox = document.getElementById("movie-search-box");

// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=dd3f37db").then((res) =>
//   res.json().then((data) => console.log(data))
// );

// http://www.omdbapi.com/?i=tt3896198&apikey=dd3f37db

// poster api http://img.omdbapi.com/?apikey=[dd3f37db]&

async function loadMovies(searchTerm) {
  const URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=dd3f37db`;
  const res = await fetch(`${URL}`);
  const data = await res.json();
  //   console.log(data.Search);
  if (data.Response == "True") displaymovieList(data.Search);
}

function findMovies() {
  let searchTerm = movieSearchBox.value;
  console.log(movieSearchBox.value);
}
