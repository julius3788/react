const initialState = {
    userData:[],
    userTotal:0
}

const memberReducer = (state=initialState, action) =>{
switch (action.type){
    case 'ADD_MEMBERS':
        return{
            ...state,
            userData:action.payload.members,
        }

    default:
    return state
    }    
}

export default memberReducer