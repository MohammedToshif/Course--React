/*
// video - 77 - (useInput Custom Hook) (basic)

import React, { useState } from 'react'

function UserForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const submitHandler = e => {
        e.preventDefault()      // stop the page for refreshing
        alert(`Hello ${firstName} ${lastName}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name</label>
                    <input value={firstName} onChange={e => setFirstName(e.target.value)} type='text' />
                </div>

                <div>
                    <label>Last name</label>
                    <input value={lastName} onChange={e => setLastName(e.target.value)} type='text' />
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
*/

/*
1st => import useState
2nd => create to variable
3rd => work in JSX (form tag)
4th => to convert these input element into controlled components 
*/



// video - 77 - (useInput Custom Hook) (custom hook) attached with useInput

import React, { useState } from 'react'
import useInput from './useInput'

function UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()      // stop the page for refreshing
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name</label>
                    <input 
                        { ...bindFirstName }
                    type='text'/>
                </div>

                <div>
                    <label>Last name</label>
                    <input 
                        { ...bindLastName }
                    type='text' />
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm

/*
bind firstName => replace the value and onChanged attribute for first name
bind lastName => replace the value and onChanged attribute for last name
when specify as an attribute though we do have to use the spread operator
*/

/*
value not field in browser  (input field)
*/