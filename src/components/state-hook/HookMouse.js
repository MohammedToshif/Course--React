/*
// video - 53 - (runs effects only once)

import React, {useState, useEffect } from 'react'

function HookMouse() {

  const [x, setX] = useState(0)  
  const [y, setY] = useState(0)  

  const logMousePosition = e => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)
  }, [])

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse
*/



// video - 54 - (useEffect with cleanup)

import React, {useState, useEffect } from 'react'

function HookMouse() {

  const [x, setX] = useState(0)  
  const [y, setY] = useState(0)  

  const logMousePosition = e => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('component unmount code')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse


/*
line: 49 => the function that is passed to use effect can return a function which will be executed when the component will unmount, 
line: 53 => so basically you return your clean up function
*/