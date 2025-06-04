
// video - 49 - (useState with array)
// displayed random number between 1-10

import React, { useState } from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([ ...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

  return (
    <div>
        <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
            <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HookCounterFour


/*
The useState hook lets you add state to functional components.
in Classes, the state is always an object.
within the useState hook, the state dosen't have to be an object(it can be a number, a string, a boolean, etc.)
The useState hook returns an array with 2 elements. (The first elements is the current value of the state, and the second elements is a state setter function.)
New state value depends on the previous state value? you can pass a function to the setter function.  
when dealing with objects or arrays, always make sure to spread your state variable and then call the setter function.
*/

/*
The effect hook lets you perform side effects in functional components.
it is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods.
*/