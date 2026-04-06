import React, { useEffect, useState } from 'react'

const ExampleThree = () => {

    const [name , setName] = useState(() =>{
        const savedName = localStorage.getItem("name");
        return savedName ? JSON.parse(savedName) : "";
    })

    useEffect(() => {
        localStorage.setItem("name" , JSON.stringify(name));
    },[name])

    const onchangeHandler = (event) => setName(event.target.value)

    const onclickHandler = () => setName("");

  return (
    <div>
        <h1>Your Name: {name}</h1>
        <input type="text" placeholder='Enter Your Name' onChange={onchangeHandler}/>
        <button onClick={onclickHandler}>Clear Name</button>
    </div>
  )
}

export default ExampleThree