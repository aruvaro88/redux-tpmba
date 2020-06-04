import React from "react"
import { useSelector } from "react-redux"

const MovieList = () => {
  const movieList = useSelector((state) => state.movieList)
  return (
    <>
          {movieList &&
              movieList.map((elm) => (
                  <article key={elm.id}>
                      Name: <h4>{elm.name}</h4>
                      Genre: {elm.genre.map((gen => <h5>{gen}</h5>))}       
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
