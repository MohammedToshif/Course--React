// video - 11 (setState)

// shortcut - react snippets (typr - rce then enter) we have a class comp.
// increment value
/*
import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {    // shortcut - type rconst for contructer
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({     // 1st parameter - object
            count: this.state.count + 1
        }, 
        () => {     // 2nd parameter - callback function
            console.log('Callback value', this.state.count);
            }
        )
        console.log(this.state.count);
    }


    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>

        )
    }
}

export default Counter
*/


// increment value 


import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {    // shortcut - type rconst for contructer
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        //     this.setState({     // 1st parameter - object
        //         count: this.state.count + 1
        //     }, 
        //     () => {     // 2nd parameter - callback function
        //         console.log('Callback value', this.state.count);
        //         }
        //     )

        this.setState(prevState => ({       // count five times
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>

        )
    }
}

export default Counter