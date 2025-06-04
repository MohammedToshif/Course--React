
// video - 55 - (useEffect with incorrect dependency)

import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default IntervalClassCounter



/*
line: 15 => create interval timer that is going to update the count value by one every second

line: 23 => increment the count value by one every second

line: 19 => timers also need to be cleared to avoid memory leaks which we do so in component will unmount

line: 32 => in the render method we display  the count value in the h1 tag
*/