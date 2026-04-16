import React, { useState } from 'react'

const App = () => {

  const [count , setCount] = useState(15)

  const Increment = () =>{
    if(count<20){
      setCount(count+1);
    }
  }

  const Decrement = () =>{
    if(count>0){
      setCount(count-1);
    }
  }

  return (
    <>
    <h1>Counter App</h1>
    <div>
      <h3>Count: {count}</h3>
      <button onClick={Increment}> Increment </button>
      <br />
      <button onClick={Decrement}>Decrement </button>
    </div>
    </>
  )
}

export default App