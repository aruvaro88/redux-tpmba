import movieReducer from "./movieReducer"
import filterReducer from "./filterReducer"
import { combineReducers } from "redux"
//all reducers to pass to the general state
const allReducers = combineReducers({
    movieList: movieReducer,
    filter: filterReducer
})

export default allReducers