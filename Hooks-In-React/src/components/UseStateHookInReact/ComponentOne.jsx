import React from 'react'

const ComponentOne = ({count , OnIncrement}) => {

  const handleClick = () => OnIncrement();
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ComponentOne