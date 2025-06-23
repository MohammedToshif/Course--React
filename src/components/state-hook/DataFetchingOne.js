
// video - 67 - (Fetching data with useReducer part 1)

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)  // loading flag indicate the data fetching happening in the background
    const [error, setError] = useState('')    // display an error if something went wrong
    const [post, setPost] = useState({})  // variable to hold the api data

    useEffect(() => {           // for side effect
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)  // set the loading flag to false
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Something went wrong')
            })
    }, [])         // empty array to ensure our api is called only once

    return (
        <div>
            {loading ? 'Loading' : post.title }      
            {error ? error : null} 
        </div>
    )
}

export default DataFetchingOne
