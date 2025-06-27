
// video - 77 - (useInput Custom Hook) (custom hook) attached with UserForm

import {useState} from 'react'

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const reset = () => {
        setValue(initialValue)
    }
    const bind = {
        value,      // ES6 shothand syntax for object(create property)
        onChange: e => {
            setValue(e.target.value)
        }
    }
    return [value, bind, reset]
}

export default useInput

