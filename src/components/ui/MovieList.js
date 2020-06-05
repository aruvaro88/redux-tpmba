import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { haveSeen, removeMovie, setFilter } from "../actions/index"
import "./movieList.css"

const MovieList = () => {
  //initialized variables
  const movieList = useSelector((state) => state.movieList)
  let filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  //sort state array of movies
  movieList.sort((a, b) => a.haveSeen - b.haveSeen)

  //function to call an action which changes haveSeen property of the selected movie
  const handleChange = (movieId) => {
    dispatch(haveSeen(movieId))
  }
//function to filter state array of movies to get movies with selected genre
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
  //function to change filter state
  const handleRadio = (e) => {
    dispatch(setFilter(e.target.id))
  }
//array with the movies of the selected filter
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
