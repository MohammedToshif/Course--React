
// video - 25 - (Pure component)

import React, { Component } from 'react'

class PureComp extends Component {
  render() {
    console.log('Pure Comp render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
} 

export default PureComp

/*
regular Component.
A regular comp. does not implement the shouldComponentUpdate method. it always returns true by default

pure comp.
a pure comp. on the other hand, implements the shouldComponentUpdate with a shallow props and state comparison.

*/