import  axios from 'axios'

export const addFilms = (films) => ({
    type: 'ADD_FILMS',
    payload:{
        films:films
    }
})

export const fetchFilms = () => {
    return (dispatch) => {
        axios.get('https://swapi.co/api/films/')
        .then(response=>{
            const films = response.data.results
            console.log('get the result')
            dispatch({
                type: 'ADD_FILMS',
                payload:{
                    films:films
                }
            })

            //dispatch(addMembers(members))
        })
    }
}
