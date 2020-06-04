import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { haveSeen, removeMovie } from "../actions/index"

const MovieList = () => {
  const movieList = useSelector((state) => state.movieList)
  const dispatch = useDispatch()

  const handleChange = (movieId) => {
    dispatch(haveSeen(movieId))
  }

  return (
    <>
      {movieList &&
        movieList.map((elm) => (
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
