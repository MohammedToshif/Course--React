
        // video - 17 (List renderning)

import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>
            I am {person.name}. I am {person.age} years old.. I play {person.skill}
        </h2>
    </div>
  )
}

export default Person

