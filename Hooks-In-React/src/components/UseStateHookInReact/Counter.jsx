import React, { useState } from 'react'

const Counter = () => {

    const [count , setCount] = useState(0);

    const clickHandler = () => {
        setCount(prevCount => prevCount + 1);
    }

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={clickHandler}>Increment</button>
    </div>
  )
}

export default Counter