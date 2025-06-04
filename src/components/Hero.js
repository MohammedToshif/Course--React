
// video - 32 - (Error Boundary)


// Error boundary : A class component that implements either one of both the lifecycle methods static getDerivedStateFromError() and componentDidCatch() to catch and handle JavaScript errors during rendering in

// the static method getDerivedStateFromError() is used to render a fallback UI after an error is thrown and the componentDidCatch() is used to log the error information.

import React from 'react'

function Hero({heroName}) {
    if (heroName === 'Joker') {
        throw new Error('not a hero')
    }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero

