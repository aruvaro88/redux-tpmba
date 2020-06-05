import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { haveSeen, removeMovie, setFilter } from "../actions/index"
import "./movieList.css"

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
      <section className="filter-nav">
        <article className="filter-radios">
          <div>
            <input type="radio" id="SHOW_ROMANCE" name="genre" onChange={handleRadio} />
            <label for="romance">Romance</label>
          </div>
          <div>
            <input type="radio" id="SHOW_DRAMA" name="genre" onChange={handleRadio} />
            <label for="drama">Drama</label>
          </div>
          <div>
            <input type="radio" id="SHOW_COMEDY" name="genre" onChange={handleRadio} />
            <label for="comedy">Comedy</label>
          </div>
          <div>
            <input type="radio" id="SHOW_ALL" name="genre" onChange={handleRadio} />
            <label for="all">See All</label>
          </div>
        </article>
      </section>
      <section className="card-list">
        {movieList &&
          visibleMovies.map((elm) => (
            <article key={elm.id} className="movie-card">
              <div className="movie-data">
                <h1>{elm.name}</h1>
                {elm.genre && elm.genre.map((gen, idx) => <p key={idx}>{gen}</p>)}
              </div>
              <div className="movie-buttons">
                <div>
                  <input type="checkbox" onChange={() => handleChange(elm.id)} />
                  <label for="checkbox">Have Seen</label>
                </div>
                <button className="button" onClick={() => dispatch(removeMovie(elm.id))}>
                  Borrar
                </button>
              </div>
            </article>
          ))}
      </section>
    </>
  )
}

export default MovieList
