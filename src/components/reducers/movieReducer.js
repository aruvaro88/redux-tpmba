const movieReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return [...state, {
                id: action.id,
                name: action.name,
                genre: action.genre,
                haveSeen: false
            }]
        default:
            return state
    }

}
export default movieReducer