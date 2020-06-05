//initialized variable to set id of the object movie
let nextId = 0
//action to add a movie to the state
export const addMovie = (name, genre) => {
  return {
    type: "ADD_MOVIE",
    id: nextId++,
    name: name,
    genre: genre,
    haveSeen: false,
  }
}
//action to change haveSeen property of the movie object
export const haveSeen = (movieId) => {
  return {
    type: "HAVE_SEEN",
    id: movieId,
  }
}
//action to remove a movie from the array
export const removeMovie = (movieId) => {
  return {
    type: "REMOVE_MOVIE",
    id: movieId,
  }
}
//action to set the filter of the state
export const setFilter = (genre) => {
  return {
    type: "SET_FILTER",
    payload: genre,
  }
}