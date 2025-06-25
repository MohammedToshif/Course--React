/*
// video - 76 - (useCounter Custom Hook) (basic)

import React, {useState} from 'react'

function CustomHook() {
    const [count, setCount] = useState(0)
    
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }

  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomHook
*/



/*
1st => import useState from React
2nd => create a count state variable 
3rd => define three method (increse, decrese and reset) the counter value
*/




// video - 76 - (useCounter Custom Hook) (attach with useCounter) (with custom hook)

import React, {useState} from 'react'
import useCounter from './useCounter'

function CustomHook() {
    const [count, increment, decrement, reset] = useCounter(0, 1)

  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomHook