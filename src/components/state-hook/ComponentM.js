
// video - 66 - (useReducer with useContext)

import React, {useContext} from 'react'
import { CountContext } from '../../App'

function ComponentM() {
    const CountContext = useContext(CountContext)
  return (
    <div>
        Component M - {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentM
