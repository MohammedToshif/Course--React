/*
// video - 38 - (Context - part - 2)

import React, { Component } from 'react'
import ComponentF from './ComponentF'

class ComponentE extends Component {
  render() {
    return <ComponentF />
  }
}

export default ComponentE
*/


// video - 39 - (Context - part - 3)

import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    )
  }
}

ComponentE.contextType = UserContext

export default ComponentE