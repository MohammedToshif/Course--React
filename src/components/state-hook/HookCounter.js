
// video - 46 - (useState Hook)

import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter

// hook or function accepts an arguments which is the initial value of the state property and returns the current values of the state property and a methods that is capable of updating that state property

/*
Rules of Hooks
Only Call Hooks at the Top Level
don't call Hooks inside loops, conditions, or nested functions"

"only call Hooks from React function"
call them from within react functional componrnts and not just any regular javascriipt functions
*/