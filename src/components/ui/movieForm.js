import React from "react"
import { addMovie } from "../actions/index"
import { useDispatch } from "react-redux"

const MovieForm = () => {
  const dispatch = useDispatch()
  let name
  let genre
  const handleSubmit = (e) => {
    e.preventDefault()
    let genreArray = genre.value.split(" ")
    genreArray = genreArray.map((elm) => elm.toLowerCase())
    genreArray = genreArray.filter((elm, idx) => genreArray.indexOf(elm) === idx)

    dispatch(addMovie(name.value, genreArray))
    name.value = ""
    genre.value = ""
  }

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
