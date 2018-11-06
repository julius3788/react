const initialState = {
    filmData:[]
   
}

const FilmReducer = (state=initialState, action) =>{
switch (action.type){
    case 'ADD_FILMS':
        return{
            ...state,
            userData:action.payload.films,
        }

    default:
    return state
    }    
}

export default FilmReducer