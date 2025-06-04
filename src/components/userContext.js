/*
// video - 38 - (Context - part - 2)

import React from 'react'

// step 1 (creating the user context)
const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
*/


// video - 39 - (Context - part - 3)

import React from 'react'

// step 1 (creating the user context)
const UserContext = React.createContext('Codevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext