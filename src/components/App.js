import React from "react"
import "./App.css"
import MovieForm from "../components/ui/movieForm"
import MovieList from "../components/ui/MovieList"


function App() {
  return (
    <main className="movie-page">
      <section className="movie-form">
        <MovieForm />
      </section>
      <section className="movie-list">
        <MovieList />
      </section>
    </main>
  )
}

export default App
