

// video - 23 - (component mounting lifecycle methods)
/*
import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Toshif'
      }
      console.log('LifecycleA constructor')     // explain constructor
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

  render() {
  
      console.log('LifecycleA render')
      return (<div>
        <div>'LifecycleA render'</div>
        <LifecycleB />      
      </div>) 
        
  }
}

export default LifecycleA
*/



// video - 23 - (component updating lifecycle methods)

/*
import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Toshif'
      }
      console.log('LifecycleA constructor')     // explain constructor
    }
    
    static getDerivedStateFromProps(props, state) {     // first method (updating)
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {               // scnd method (updating)
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {     // 3rd - updating
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {            // for updatimng
      console.log('LifecycleA render')
      return (<div>
        <div>'LifecycleA render'</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />      
      </div>) 
        
  }
}

export default LifecycleA
*/

/*
LifecycleA constructor
LifecycleA LifecycleA getDerivedStateFromProps
LifecycleA LifecycleA render
LifecycleB LifecycleB constructor
LifecycleB LifecycleB getDerivedStateFromProps
LifecycleB LifecycleB render
LifecycleB LifecycleB componentDidMount
LifecycleA LifecycleA componentDidMount
LifecycleA LifecycleA getDerivedStateFromProps
LifecycleA LifecycleA shouldComponentUpdate
LifecycleA LifecycleA render
LifecycleB LifecycleB getDerivedStateFromProps
LifecycleB LifecycleB shouldComponentUpdate
LifecycleB LifecycleB render
LifecycleB LifecycleB getSnapshotBeforeUpdate
LifecycleA LifecycleA getSnapshotBeforeUpdate
LifecycleB LifecycleB componentDidUpdate
LifecycleA LifecycleA componentDidUpdate
*/