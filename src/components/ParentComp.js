
// video - 25 - (Pure component)

import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Toshif'
    }
  }
  
  componentDidMount() {
    setInterval(() => {
        this.setState({
            name: 'Toshif'
        })
    }, 2000)
  }
  
    render() {
        console.log('*********Parent Comp render***********')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />     
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp
