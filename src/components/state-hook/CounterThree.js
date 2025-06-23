
// video - 65 - (Multiple useReducers)


import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1    // new state, current state + 1
        case 'decrement':
            return state - 1    // new state, current state - 1
        case 'reset':
            return initialState
        default:                // current state withouth any changes
            return state
    }
}

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState)
    // return current state as called count paired with dispatch function to update state (this dispatched method allows us to execute the code correspoding to a perticular action)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)


    return (
    <div>
    <div>Count - {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>

    <div>Count Two - {countTwo}</div>
      <button onClick={() => dispatchTwo('increment')}>Increment</button>
      <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
      <button onClick={() => dispatchTwo('reset')}>Reset</button>
    </div >
  )
}

export default CounterThree
