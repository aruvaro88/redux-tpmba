import movieReducer from "./movieReducer"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    movieList: movieReducer
})

export default allReducers