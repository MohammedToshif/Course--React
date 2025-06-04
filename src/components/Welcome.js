// class component
/*
import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>Class Component</h1>;
    }
}

export default Welcome;
*/


//---- class compnent video - 9 (Greet props)

import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName} </h1>;
    }
}

export default Welcome;


/*
// video - 12  (Destructring props and state - class component)


import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const { name, heroName } = this.props;
        // const { state1, state2 } = this.state;  // for state statement
        return (
        <h1>
            Welcome {name} a.k.a {heroName} 
        </h1>
        )
    }
}

export default Welcome;
*/