import React, { useState } from 'react'

const App = () => {

  // will making the states for password to set it in future

  const [Password , setPassword] = useState("");

  // a state for it's length

  const [Length , setLength] = useState(8); 

  // a state for it's Number is allowed or not

  const [numberAllowed , setnumberAllowed] = useState(false);

  // a state for a character is allowed or not

  const [specialcharAllowed , setspecialcharAllowed] = useState(false);

  const passwordGenerator = () => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(specialcharAllowed) str += "!@#$%^&*()_{}[]/:;,.<>?~`";

    for(let i=1; i<=str.length; i++){
      let char = Math.floor(Math.random() * str.length + 1);

      password += str.charAt(char);
    }

  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-8 text-orange-500 bg-gray-500'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Password Generator</h1>
      </div>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type="text"
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />
      </div>
    </>
  )
}

export default App