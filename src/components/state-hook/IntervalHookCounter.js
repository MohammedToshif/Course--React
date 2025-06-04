
// video - 55 - (useEffect with incorrect dependency)

import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
        // setCount(prevCount => prevCount + 1) //2nd form to use with (empty array: line19)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])

  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
