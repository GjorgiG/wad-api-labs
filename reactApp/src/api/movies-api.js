export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=707492c19140c80008dc01b3fb20f5a8&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };