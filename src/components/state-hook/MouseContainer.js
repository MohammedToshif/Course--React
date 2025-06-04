
// video - 54 - (useEffect with cleanup)

import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
   const [display, setDisplay]  = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)} >Toggle display</button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer



/*
line: 12 => display variable is set to true, we rendered the hook mouse component
*/

/*
Note:
when you want to execute some component cleanup code you include it in a a function and return that function from the function passsed to use effect the cleanup code can be canceling subscription timers or even removing event handlers as we have just seen
*/