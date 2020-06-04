import React from "react"
import { addMovie } from "../actions/index"
import { useSelector, useDispatch } from "react-redux"

const MovieForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addMovie(name.value, genre.value))
    name.value = ""
    genre.value = ""
  }
  let name
  let genre
  return (
    <form onSubmit={handleSubmit}>
      Movie Name:
      <input
        ref={(node) => {
          name = node
        }}
      />
      Genre:
      <input
        ref={(node) => {
          genre = node
        }}
      />
      <button type="submit">Add Movie</button>
    </form>
  )
}

export default MovieForm
