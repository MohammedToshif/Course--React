/*
// video - 51 - (useEffect after render)

import React, {useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click {count} times </button>
    </div>
  )
}

export default HookCounterOne
*/
/*
line 9 => we are besically requesting to react to execute the function that is passed as an arguments every time the component is rendered.
use effect runs after every render of the component
it runs both after the first render and after every update
use effect is placed inside the component functions. 
*/



// video - 52 - (Conditionally run effects)

import React, {useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `You clicked ${count} times`
    }, [count])

  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Click {count} times </button>
    </div>
  )
}

export default HookCounterOne


/*
line: 42 => in this array we need to specify either props or state that we need to watch for changes, only i those props and states specified in this array were to change the effect would be executed.
for our example we need the effect to be executed only when the count value changes.so within the array the count value is changes

in order to the conditionally run an effect specify the second parameter to use effect, the second parameter is the array of values that the effect depends on, if the values don't change between renders the effects is simply not run
*/