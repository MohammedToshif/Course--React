
/*
// video - 75 - (useDocumentTitle Custom Hook)

import React, { useState, useEffect } from 'react'

function DocTitleTwo() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTwo
*/


/*
1st => import useState and useEffect
2nd => create button to the count value
3rd => updte the document title to the current count value
updating the document title is side effect.. so the code goes within the useEffect hook
*/




// video - 75 - (useDocumentTitle Custom Hook) link with (useDocumentTitle.js)

import React, {useState} from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleTwo() {
    const [count, setCount] = useState(0)

    useDocumentTitle(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTwo