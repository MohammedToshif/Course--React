
// video - 75 - (useDocumentTitle Custom Hook)

import React, {useEffect} from 'react'

function useDocumentTitle(count) {
  useEffect(() => {
          document.title = `Count ${count}`
      }, [count])
}

export default useDocumentTitle




/*
the function name for a custom hook should start with the word 'use'
reusing the code by custom hooks
*/