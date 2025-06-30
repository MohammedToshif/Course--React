
// React Render Tutorial - 3 - useState

// snippet -> rafc (create function component)

import React, { useState } from 'react'

export const UseState = () => {
    const [count, setCount] = useState(0)

    console.log("UseState Render")
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setCount(0)}>Count to 0</button>
      <button onClick={() => setCount(5)}>Count to 5</button>
    </div>
  )
}

export default UseState


// after the initial render if you call a setter functions but set the state to the same value the component will not re-render ex. (in button)
// after a component has been re-renderd if you set the state variable to the same value, the component will re-render but only one more time

/*
summary
the setter functions from a useState hook will cause the component to re-render.
the exception is when you update a state hook to the same value as the current state.
same value after re-render? react will render that specific component one more time and then bails out from any subsequent renders.
*/