
// video - 34 - (Higher Order Components - part - 2) with clickCounter.js, HoverCounter.js

import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }

        render() {
            console.log(this.props.name)
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}
            { ...this.props}    // props using spread operator in wapped component
             />
        }
    }
    return NewComponent
}

export default withCounter

// noye: props is passed to the HOC but not the component that is wrapped by the HOC => to fix this issue you need to pass down the remaining props to the wrapped component using the spread operator