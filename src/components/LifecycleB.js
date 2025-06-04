

// video - 23 - (component mounting lifecycle methods)
// child component
/*

import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Toshif'
      }
      console.log('LifecycleB constructor')     // explain constructor
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

  render() {
  
      console.log('LifecycleB render')
      return <div>'LifecycleB render'</div>
        
  }
}

export default LifecycleB
*/


// video - 23 - (component updating lifecycle methods)

/*

import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Toshif'
      }
      console.log('LifecycleB constructor')     // explain constructor
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {               // scnd method (updating)
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {     // 3rd - updating
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }

  render() {
  
      console.log('LifecycleB render')
      return <div>'LifecycleB render'</div>
        
  }
}

export default LifecycleB
*/