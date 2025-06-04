
        // video - 16 (conditonal renderning)
/*
4 types of conditional rendering
1.) if/else     2.) Element variables
3.) ternary cond. opert.    4.) short circuit operatot 

*/
        // part (01) - (if/else)
/*
import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // isLoggedIn: false      // state property (print - else part)
            isLoggedIn: true      // state property (print - true part)
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return <div>Welcome toshif</div>
        } else {
            return <div>Welcome Guest</div>
        }

        // return (
        //     <div>
        //         <div>welcome toshif</div>
        //         <div>welcome Guest</div>
        //     </div>
        // ) 
    }
}

export default UserGreeting
*/

/*
NOTE : if/else cond. dont work in jsx
*/


        // part (02) - Element Variables

/*
import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // isLoggedIn: false     
            isLoggedIn: true     
        }
    }    

    render() {
        let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome toshif</div>
        } else {
            message = <div>Welcome Guest</div>
        }
        return <div>{message}</div>
    }
}       

export default UserGreeting

// message is the varibales which stores the element to be rendered and hence this is the element variables approach
*/


/*
    // part (03) - Ternary condition operator
// benefit of this - can be used inside the JSX

import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // isLoggedIn: false     
            isLoggedIn: true
        }
    }

    render() {
        return this.state.isLoggedIn ? (
            <div>Welcome Toshif</div>
        ) : (
            <div>Welcome Guest</div>
        )
    }
}
export default UserGreeting    
*/

/*
    // part (04) - Short-circuit operatot

// when you want to render either something or nothing you make use short-cict.

import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // isLoggedIn: false     
            isLoggedIn: true
        }
    }

    render() {
    //    return this.state.isLoggedIn && <div>Welcome toshif</div>
       return this.state.isLoggedIn && <button>click me</button>
    }
}
export default UserGreeting
*/

/*
        // (prectice) 

import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // isLoggedIn: false      // state property (print - else part)
            isLoggedIn: true      // state property (print - true part)
        }
    }

render() {
    if (this.state.isLoggedIn) {
        return alert("user logged in")
    } else {
        return alert("oops! ERROR")
    }
    }
}

export default UserGreeting
*/