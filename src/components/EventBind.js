// video - 14 (Binding Event Handler)

// snippet rce (to create class comp.)

import React, { Component } from 'react'

class EventBind extends Component {
// snippet (rconst) for create constructor

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    }
    
    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this);   
    }

    // this environment
    // const account = {
    //   a: 100,
    //   b: 200,
    //   balance() {
    //     console.log('outer',this.a, this); // this pointing to account

    //     const arrow = () => {
    //       console.log('arrow', this) // this pointing to account
    //     }
    //     arrow();

    //     function normalFun(firstName, lastName) {
    //       console.log('normalFun', this); //
    //     }
    //     normalFun('Tosif', 'Khan')
    //   }
    // }
    // account.balance();


    

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        { <button onClick={this.clickHandler.bind(this)}>Click with bind</button> }
        { <button onClick={() => this.clickHandler()}>Click with arrow function</button> }
        
      </div>
    )
  }
}

export default EventBind


/*
// 2nd( using arrow function)

import React, { Component } from 'react'

class EventBind extends Component {
// snippet (rconst) for create constructor

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    }
    
    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this);
        
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.clickHandler()}>Click</button>
      </div>
    )
  }
}

export default EventBind
*/

/*
// 3rd( in the constructer binding the render method)

import React, { Component } from 'react'

class EventBind extends Component {
// snippet (rconst) for create constructor

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)  // 3rd
    }
    
    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this);
        
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
*/

/*
// 4th (to use arrow func. as a class property (change the way you define your method in the class))

import React, { Component } from 'react'

class EventBind extends Component {
// snippet (rconst) for create constructor

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    }
    
    clickHandler = () => {      // 4th
        this.setState({
            message: 'Goodbye!'     
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
*/


