// video - 37 - (Render Props - part - 2)

import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        {/* Toshif (a.) */}
        {/* {this.props.name} // (b.) */}
        {/* {this.props.name()} (c.) */}
        {/* {this.props.name(true)} // (d.) */}
        {/* {this.props.render(false)} // (e.) */}
      </div>
    )
  }
}

export default User


/*
Render Props
The Term "render prop" refer to a technique for 'sharing code' between React components using a 'prop whose value is a function'.
*/