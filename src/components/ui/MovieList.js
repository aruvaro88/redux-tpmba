import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { haveSeen, removeMovie, setFilter } from "../actions/index"


const MovieList = () => {
  const movieList = useSelector((state) => state.movieList)
  let filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  movieList.sort((a, b) => a.haveSeen - b.haveSeen)

  const handleChange = (movieId) => {
    dispatch(haveSeen(movieId))
  }
  const getVisibleMovies = (movies, filter) => {
    switch (filter) {
      case "SHOW_ALL":
        return movies
      case "SHOW_COMEDY":
        return movies.filter((elm) => elm.genre.includes("comedy"))
      case "SHOW_DRAMA":
        return movies.filter((elm) => elm.genre.includes("drama"))
      case "SHOW_ROMANCE":
        return movies.filter((elm) => elm.genre.includes("romance"))
      default:
        return movies
    }
  }
    const handleRadio = (e) => {
      dispatch(setFilter(e.target.id))
  }

  const visibleMovies = getVisibleMovies(movieList, filter)
    return (
      <>
        <input type="radio" id="SHOW_ROMANCE" name="genre" onChange={handleRadio} />
        <label for="romance">Romance</label>
        <input type="radio" id="SHOW_DRAMA" name="genre" onChange={handleRadio} />
        <label for="drama">Drama</label>
        <input type="radio" id="SHOW_COMEDY" name="genre" onChange={handleRadio} />
        <label for="comedy">Comedy</label>
        <input type="radio" id="SHOW_ALL" name="genre" onChange={handleRadio} />
        <label for="all">See All</label>

        {movieList &&
          visibleMovies.map((elm) => (
            <article key={elm.id}>
              Name: <h4>{elm.name}</h4>
              Genre: {elm.genre && elm.genre.map((gen, idx) => <h5 key={idx}>{gen}</h5>)}
              <form>
                <input type="checkbox" onChange={() => handleChange(elm.id)} />
                Have Seen
              </form>
              <button onClick={() => dispatch(removeMovie(elm.id))}>Borrar</button>
            </article>
          ))}
      </>
    )
}

export default MovieList
