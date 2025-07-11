/*
// video - 60 - (useContext Hook Part 2)

import React from 'react'
import ComponentF from './ComponentF'

function ComponentE() {
  return (
    <div>
        <ComponentF />
    </div>
  )
}

export default ComponentE
*/


/*
// video - 61 - (useContext Hook Part 3)

import React, {useContext}  from 'react'
import ComponentF from './ComponentF'
import { userContext, ChannelContext } from '../../App'

function ComponentE() {

  const user = useContext(userContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
        {user} - {channel}
    </div>
  )
}

export default ComponentE
*/