/*
// video - 64 - (useReducer - complex state & action)


import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + 1}
        case 'decrement':
            return { firstCounter: state.firstCounter - 1}
        case 'reset':
            return initialState
        default:                // current state withouth any changes
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    // return current state as called count paired with dispatch function to update state (this dispatched method allows us to execute the code correspoding to a perticular action)

  return (
    <div>
        <div>Count - {count.firstCounter}</div>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo
*/


/*
        // part (2) - advantage of this object pattern (use of action as an object we can use additional data in the reducer function)

import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return { firstCounter: state.firstCounter - action.value}
        case 'reset':
            return initialState
        default:                // current state withouth any changes
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    // return current state as called count paired with dispatch function to update state (this dispatched method allows us to execute the code correspoding to a perticular action)

  return (
    <div>
        <div>Count - {count.firstCounter}</div>
      <button onClick={() => dispatch({type: 'increment', value: 1})}>
        Increment</button>
      <button onClick={() => dispatch({type: 'decrement', value: 1})}>
        Decrement</button>
        <button onClick={() => dispatch({type: 'increment', value: 5})}>
        Increment 5</button>
      <button onClick={() => dispatch({type: 'decrement', value: 5})}>
        Decrement 5</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo        
*/



// part 3 (maintian two different counter - maintain both the state and action as objects)

import React, { useReducer } from 'react'

const initialState = {  // maintain multiple variables in a single object
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:                // current state withouth any changes
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    // return current state as called count paired with dispatch function to update state (this dispatched method allows us to execute the code correspoding to a perticular action)

    return (
        <div>
            <div>firstCounter - {count.firstCounter}</div>
            <div>secondCounter - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
                Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
                Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
                Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
                Decrement 5</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
                    Increment Counter 2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
                    Decrement Counter 2</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterTwo         