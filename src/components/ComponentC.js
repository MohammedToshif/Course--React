
// video - 38 - (Context - part - 2)

import React, { Component } from 'react'
import ComponentE from './ComponentE.js'

class ComponentC extends Component {
  render() {
    return <ComponentE />
  }
}

export default ComponentC


/*
Three steps to implement when making use of context
create the context
provides a context value
consume the context value (in the necessary components)
*/
