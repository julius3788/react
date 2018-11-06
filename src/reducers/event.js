const initialState = {
    eventList: [],
  }
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_EVENTS':
        return {
          ...state,
          eventList: action.payload.events
        }
  
      default:
        return state
    }
  }