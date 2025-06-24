
// video - 71 - (useMemo Hook)

import React, { useState, useMemo } from 'react'

function UseMemo() {
    const [CounterOne, setCounterOne] = useState(0)     // create counter variable
    const [CounterTwo, setCounterTwo] = useState(0)     // create counter variable

    const incrementOne = () => {
        setCounterOne(CounterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(CounterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while( i<2000000000) i++
        return CounterOne % 2 === 0
    }, [CounterOne])


    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {CounterOne}</button>
                <span>{isEven ? ' Even ' : ' Odd '}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {CounterTwo}</button>
            </div>
        </div>
    )
}

export default UseMemo



// useMemo is a hook that will only recompute the cached value when one of the dependencies changes.. this optimisation to avoid expensive calculation on every render

/*
first => import useMemo
2nd => within the component called useMemo hook..1st aragument we pass in the function whose return value need to be cashed.. if our case this would be the arrow function to calculate if a numaber is even or odd
scnd parameter => we need to specify the dependencies...our function depends on the value of counterOne change we are telling react to recompute the value and not use the cached value...so in the array specify counterOne
useMemo returns a cached value which we are going to assign to the cariable isEven
*/ 

/*
 useCallback vs useMemo
 diffenrece is that useCallback caches the provides function instance itself where useMemo invokes the provides and caches as result
 so.. if you need to cash a function use callback... when you need the result of an invoked function useMemo 
 */