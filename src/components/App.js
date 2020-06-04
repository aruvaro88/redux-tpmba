import React from "react"
import "./App.css"
import MovieForm from "../components/ui/movieForm"
import { addMovie } from "../components/actions/index"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const movieList = useSelector((state) => state.movieList)
  const dispatch = useDispatch()

  return <MovieForm />
}

export default App
