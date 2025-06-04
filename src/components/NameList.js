
        // video - 17 (List renderning)
// using map method
import React from 'react'
import Person from './Person'

function NameList() {
    /*
    const names = ['Bruce', 'Clark', 'Diana', 'Happy']
    const nameList = names.map(name => <h2>{name}</h2>)
    return <div>{nameList}</div>
*/

    // NORMAL methods (its not a solution)
    // <div>
    //   <h2>{names[0]}</h2>
    //   <h2>{names[1]}</h2>
    //   <h2>{names[2]}</h2>
    // </div>
  
/*
    // (02) - list item
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 25,
            skill: 'cricket'
        },
        {
            id: 2,
            name: 'Clark',
            age: 28,
            skill: 'football'
        },
        {
            id: 3,
            name: 'Diana',
            age: 22,
            skill: 'tennis'
        }
    ]
    const personList = persons.map(person => <h2>my name is {person.name}. my age is {person.age} year old. i play {person.skill}. my lucky number is {person.id}</h2>)
    return <div>{personList}</div>
}


export default NameList
*/



// (03) - list item (attach file with (Person.js))
const persons = [
    {
        id: 1,
        name: 'Bruce',
        age: 25,
        skill: 'cricket'
    },
    {
        id: 2,
        name: 'Clark',
        age: 28,
        skill: 'football'
    },
    {
        id: 3,
        name: 'Diana',
        age: 22,
        skill: 'tennis'
    }
]
const personList = persons.map(person => <Person person={person} />)    // pass the data into person.js
    return <div>{personList}</div>

}

export default NameList


/*
        // video - 19 (Index as Key Anti-pattern)

const names = ['Bruce', 'Clark', 'Diana', 'Bruce']

const persons = [
    {
        id: 1,
        name: 'Bruce',
        age: 25,
        skill: 'cricket'
    },
    {
        id: 2,
        name: 'Clark',
        age: 28,
        skill: 'football'
    },
    {
        id: 3,
        name: 'Diana',
        age: 22,
        skill: 'tennis'
    }
]

const nameList = names.map((name, index) => <h2 key={index}>{index} {name} </h2> )
return <div>{nameList}</div>

}

export default NameList

*/