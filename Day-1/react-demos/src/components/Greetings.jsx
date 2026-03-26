import React from 'react'

const Greetings = () => {
    const greetingMessage = "Hi this is React";
    const date = new Date();


  return (
    <div>
        <h1>{greetingMessage}</h1>
        <p>Date : {date.getDate()}</p>
    </div>
)
}

export default Greetings