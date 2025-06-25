
// video - 72 - (useRef Hook)

import React, {useEffect, useRef} from 'react'

function UseRef() {

  const inputRef = useRef(null)       // 2nd

  useEffect(() => {
    // focus the input element
    inputRef.current.focus()        // 3rd
  }, [])

  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  )
}

export default UseRef


/*
element focus on page load using useRef (on input field)
using => 1st => import react (useRef)
2nd => create a ref variale by calling useRef and passing in initial value... creted the ref we need to attach it to the input element (using the reserved ref attribute)
3rd => call the focus method on the input element
*/