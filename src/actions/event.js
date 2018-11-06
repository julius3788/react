import axios from 'axios'

export const fetchEvents = () => {
  return (dispatch) => {
    axios.get('https://swapi.co/api/films')
      .then(response => {
        dispatch({
          type: 'ADD_EVENTS',
          payload: {
            events: response.data.results
          }
        })
      })
  }
}