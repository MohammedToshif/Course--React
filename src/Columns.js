
// video - 25 - (Fragments)

import React from 'react'

function Columns() {
    const items = []
  return (
    <React.Fragment>
        {
            items.map( item => (
                <React.Fragment key={item.id}>  
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
      <td>Name</td>
      <td>Toshif</td>
    </React.Fragment>
  )
}

export default Columns

// key attribute is only attribte taht can be passed to a react fragment
// React.fgragment - shortcut -> <> </> (empty opening and closing) - that represent the idea that it won't add an actual element to the Dom 
// if you do shorthands syntax throught there is one limitation "you cant pass in the 'key' attribute"