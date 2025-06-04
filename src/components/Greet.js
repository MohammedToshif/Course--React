//---- functional compnent (Greet basics)

/*
import React from 'react'

function Greet() {
    return <h1>Hello Toshif</h1>
}

// const Greet = () => <h1>Hello Toshif</h1>
export default Greet
*/


// video - 9 (Greet props)
import React from 'react'

const Greet = props => { 
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1> 
        --{props.children}--
        </div>
  )
}

export default Greet



// video - 12  (Destructring props and state - functional component)

/*
import React from 'react'

const Greet = ({name, heroName}) => { 
    
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1> 
        </div>
  )
}

export default Greet
*/


// 2nd (dest. func.body - functional component)

/*
import React from 'react'

const Greet = props => { 
    const {name, heroName} = props;
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1> 
        </div>
  )
}

export default Greet
*/

// 1st (dest. - class component)