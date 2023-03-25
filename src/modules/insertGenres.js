const insertGenres = (show) => {
  const genresContainer = document.getElementById(`showPopUp${show.id}`).querySelector('.genres');
  show.genres.forEach((genre) => {
    const genreItem = document.createElement('li');
    genreItem.className = 'genre';
    genreItem.innerText = genre;
    genresContainer.appendChild(genreItem);
  });
};

export default insertGenres;
