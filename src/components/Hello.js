// video 8 (JSX)
/*
import React from 'react'

const Hello = () => {
    const name = 'Toshif'
    return (
        <div className = 'dummyClass'>
            <h1>Hello {name}</h1>
        </div>
    )
}

export default Hello
*/


// (withouth JSX)

import React from 'react'
const Hello = () => {

    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Toshif'))    // this method accept minimum 3 parameter
  
  }
  
  export default Hello
  
// first parameter is string which specifies the HTML tag
// second parameter is we get pass any optional properties (if no property set the value of null)
// third parameter is the children for the HTML element that is children for the div tag