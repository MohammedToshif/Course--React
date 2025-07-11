// video - 29 - (Refs with Class Components)

import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {

    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }
    
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler} >Focus Input</button>
      </div>
    )
  }
}

export default FocusInput


// refs forwarding is a technique for automatically passing a ref through a component to one of its children 