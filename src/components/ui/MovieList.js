import React from "react"
import { useSelector } from "react-redux"

const MovieList = () => {
  const movieList = useSelector((state) => state.movieList)
  return (
    <>
      {movieList &&
        movieList.map((elm) => (
          <article key={elm.id}>
            <h4>Name: {elm.name}</h4>
                <h5>Genre: {elm.genre}</h5>
                <form>
                    <input type="checkbox"/> Have Seen
                </form>
                <button>Borrar</button>
          </article>
        ))}
    </>
  )
}

export default MovieList
