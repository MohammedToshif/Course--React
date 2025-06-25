
// video - 73 - (useRef Hook part 2)

import React, { Component } from 'react'

class ClassTimer extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         timer: 0
      }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
  render() {
    return (
      <div>
        Class Timer - {this.state.timer}
        <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
      </div>
    )
  }
}

export default ClassTimer


/*
implement an interval timer that takes every seconds and displays the value in the browser
1st => create an instance field or a class property if you want to call it which will point to the interval timer
2nd => add constructor
3rd => implement component did mount and component will unmount to set and clear our interval timer
*/