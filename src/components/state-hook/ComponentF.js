/*
// video - 60 - (useContext Hook Part 2)

import React from 'react'
import { userContext, ChannelContext } from '../../App'


function ComponentF() {
    return (
        <div>
            <userContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return (
                                    <div>
                                        User context value {user}, channel context value {channel}
                                    </div>
                                 )
                             }}
                            </ChannelContext.Consumer>
                        ) 
                }}
        </userContext.Consumer >
    </div >
  )
}

export default ComponentF
*/