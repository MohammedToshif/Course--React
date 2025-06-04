
// video - 27 (Memo) (with parentcomp.js)

import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Component')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)

// note - React.memo is a higher order component (HOC) that memoizes a component's props. accepts a component add some things to that component and returns a new enhanced component.. in our case component capable of avoiding re-render when no changes in props