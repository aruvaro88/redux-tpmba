const movieReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          genre: action.genre,
          haveSeen: false,
        },
      ]
    case "HAVE_SEEN":
      return state.map((elm) => {
        console.log("ID:", action.id)
        if (elm.id !== action.id) {
          return elm
        }
        return {
          ...elm,
          haveSeen: !elm.haveSeen,
        }
      })
      case "REMOVE_MOVIE":
          return state.filter(elm =>elm.id!==action.id)
    default:
      return state
  }
}
export default movieReducer
