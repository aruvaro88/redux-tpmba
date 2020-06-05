//reducersthat manipulates movies array state
const movieReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIE": //add movie to the array
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          genre: action.genre,
          haveSeen: false,
        },
      ]
    case "HAVE_SEEN": //check de ids of the array anf manipulate haveSeen property of the chosen movie
      return state.map((elm) => {
        if (elm.id !== action.id) {
          return elm
        }
        return {
          ...elm,
          haveSeen: !elm.haveSeen,
        }
      })
      case "REMOVE_MOVIE": //remove a movie from the array
          return state.filter(elm => elm.id !== action.id)
    default:
      return state
  }
}
export default movieReducer
