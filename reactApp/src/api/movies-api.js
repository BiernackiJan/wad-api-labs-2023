export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=6cb0717bc91e807a3c81b5b0a2dc509f&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };