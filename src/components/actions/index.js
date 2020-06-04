let nextId = 0
export const addMovie = (name, genre) => {
  return {
    type: "ADD_MOVIE",
    id: nextId++,
    name: name,
    genre: genre,
    haveSeen: false,
  }
}

export const haveSeen = (movieId) => {
  return {
    type: "HAVE_SEEN",
    id: movieId,
  }
}

export const removeMovie = (movieId) => {
  return {
    type: "REMOVE_MOVIE",
    id: movieId,
  }
}

export const setFilter = (genre) => {
  return {
    type: "SET_FILTER",
    payload: genre,
  }
}