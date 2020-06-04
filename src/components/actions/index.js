import { findAllByDisplayValue } from "@testing-library/react"

let nextId = 0
export const addMovie = (name, genre) => {
    return {
        type: "ADD_MOVIE",
        id: nextId++,
        name: name,
        genre: genre,
        haveSeen: false
    }
}