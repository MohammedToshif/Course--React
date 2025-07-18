
// video - 47 - (useState with previous state)
// increment, decrement and reset value in button form

import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
      for(let i = 0; i < 5; i++) {
        setCount(prevCount => prevCount + 1)
      }
    }

     const decrementFive = () => {
      for(let i = 0; i < 5; i++) {
        setCount(prevCount => prevCount - 1)
      }
    }

  return (
    <div>
      Count: {count} <br></br>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
      <button onClick={decrementFive}>Decrement 5</button>
    </div>
  )
}

export default HookCounterTwo
