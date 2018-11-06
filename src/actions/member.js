import  axios from 'axios'

export const addMembers = (members) => ({
    type: 'ADD_MEMBERS',
    payload:{
        members:members
    }
})

export const fetchMembers = () => {
    return (dispatch) => {
        axios.get('https://swapi.co/api/people/')
        .then(response=>{
            const members = response.data.results
            console.log('get the result')
            dispatch({
                type: 'ADD_MEMBERS',
                payload:{
                    members:members
                }
            })

            //dispatch(addMembers(members))
        })
    }
}