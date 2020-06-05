import React from "react"
import { addMovie } from "../actions/index"
import { useDispatch } from "react-redux"
import "./movieForm.css"
//movie form component
const MovieForm = () => {
  //initialize variables
  const dispatch = useDispatch()
  let name
  let genre
  //function that submit form data
  const handleSubmit = (e) => {
    e.preventDefault()
    //chech genres and split by spaces
    let genreArray = genre.value.split(" ")
    //transform the data to lowercase
    genreArray = genreArray.map((elm) => elm.toLowerCase()) 
    //create an array whit genres without duplicates
    genreArray = genreArray.filter((elm, idx) => genreArray.indexOf(elm) === idx)
    //call an action to add a movie to the state
    dispatch(addMovie(name.value, genreArray))
    name.value = ""
    genre.value = ""
  }

  return (
    <section className="form-elements">
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input
          ref={(node) => {
            name = node
          }}
        />
        <label for="genre">Genre</label>
        <input
          ref={(node) => {
            genre = node
          }}
        />
        <button className="button" type="submit">
          Add Movie
        </button>
      </form>
    </section>
  )
}

export default MovieForm
