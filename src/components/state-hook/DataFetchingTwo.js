
// video - 68 - (Fetching data with useReducer part 2)

import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

// declare the initial state and define the reducer function
const initialState = {
    loading: true,
    error: '',
    post: {}
}

// reducer function accepts state and action as its argument and return the updated state (new state)
const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!'
            }

        default:
            return state
    }
}


function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {           // for side effect
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS', payload: response.data})
            })
            .catch(error => {
                dispatch({type: 'FETCH_ERROR'})
            })
    }, []) 

  return (
    <div>
      {state.loading ? 'Loading' : state.post.title }      
        {state.error ? state.error : null} 
    </div>
  )
}

export default DataFetchingTwo
