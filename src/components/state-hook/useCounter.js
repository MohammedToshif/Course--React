
// video - 76 - (useCounter Custom Hook) custom hook (attached with CustomHook and CustomHookTwo)

import {useState} from 'react'

function useCounter(initialCount = 0, value) {
    const [count, setCount] = useState(initialCount)
    
    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(0)
    }

return [count, increment, decrement, reset]
}


export default useCounter

/*
this will be our custom hook for resusing counter functionality
lie 4 => is required for custom hook
we need a way to access the count value and these methods from our component..so insteasd of returning any JSX our custom hook is going to return an array of values
*/