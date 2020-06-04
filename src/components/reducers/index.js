import movieReducer from "./movieReducer"
import filterReducer from "./filterReducer"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    movieList: movieReducer,
    filter: filterReducer
})

export default allReducers