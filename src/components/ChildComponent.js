// video - 15 (Methods as props)

// snippet (rfce) to create functional component

import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
