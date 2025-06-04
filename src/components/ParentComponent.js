// video - 15 (Methods as props)

// snippet (rce) to create class component

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    // snippet (rconst) for create constructor

    constructor(props) {
        super(props)

        this.state = {
            ParentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)

    }

    greetParent(childName) {       // define method
        alert(`Hello ${this.state.ParentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
