
// video - 33 - (Higher Order Components - part - 1)

import React, { Component } from 'react'
import withCounter from '../withCounter'

// create click counter
class ClickCounter extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>
                  {this.props.name}  Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)

/*
A pattern where a function takes a component as an argument and returns a new component

const NewComponent = higherOrderComponent(originalComponent)
const EnhancedComponent = higherOrderComponent(originalComponent)
*/