
// video - 70 - (useCallback Hook)

import React from 'react'

function Button({ handleClick, children }) {
    console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default React.memo(Button)


// props.children refer to the increment age text in parent component