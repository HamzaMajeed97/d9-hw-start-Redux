const initialState = {
    favourite: {
        content: []
    }
}





const mainReducer = (state = initialState, action ) => {

switch (action.type){
    case 'ADD_TO_FAVOURITES':
        return{
            ...state,
            favourite: {
                ...state.favourite,
                content: [...state.favourite.content, action.payload]
            }
        }



        case 'REMOVE_FROM_FAVOURITES':
            return{
                ...state,
                favourite: {
                    ...state.favourite,
                    content: state.favourite.content.filter((job, i) => i !== action.payload)
                }
            }

    default: return state
    
}


}


export default mainReducer