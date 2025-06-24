
// video - 70 - (useCallback Hook)

import React, {useState, useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age]) 

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary]) 

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent


// React.memo => is a higher order component that will prevent a functional component from being re-render if its props and state do not change


// (reason when age and salary both rerender) => count and button related to age.. count accepts age as a props and button accepts increment age as a props which depended on age..so when the age increment both these components should rerender... to avoid this issue (useCallback function) come to the picture

// what? useCallback Hook => a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.
// why? => it is usefull when passing callbacks to optimized child components that rely on refrence equlity ti=o prevent unnecessary renders.
// How? => 1st => import useCallback... 2nd => call - useCallback(accepts callback func. as first parameter & array of dependencies is 2nd parameter)