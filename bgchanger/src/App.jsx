import React from 'react'
import { useState } from 'react'

const App = () => {

  const [bgcolor , setBgcolor] = useState('orange')

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: bgcolor}}>
    <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2'>
      <div className='fixed flex flex-wrap gap-3 bg-white px-3 py-3 rounded-3xl' style={{backgroundColor:'white'}}>
        <button
        onClick={()=>setBgcolor("red")}
        className='outline-none px-4
        py-2 rounded-full text-white
        shadow-lg
        'style={{backgroundColor:"red"}}>Red</button>
        <button
        onClick={()=>setBgcolor("green")}
        className='outline-none px-4
        py-2 rounded-full text-white
        shadow-lg
        'style={{backgroundColor:"green"}}>Green</button>
        <button
        onClick={()=>setBgcolor("blue")}
        className='outline-none px-4
        py-2 rounded-full text-white
        shadow-lg
        'style={{backgroundColor:"blue"}}>Blue</button>
        <button
        onClick={()=>setBgcolor("olive")}
        className='outline-none px-4
        py-2 rounded-full text-white
        shadow-lg
        'style={{backgroundColor:"olive"}}>Olive</button>
        <button
        onClick={()=>setBgcolor("gray")}
        className='outline-none px-4
        py-2 rounded-full text-white
        shadow-lg
        'style={{backgroundColor:"gray"}}>Gray</button>
        <button
        onClick={()=>setBgcolor("yellow")}
        className='outline-none px-4
        py-2 rounded-full text-black
        shadow-lg
        'style={{backgroundColor:"yellow"}}>Yellow</button>
        <button
        onClick={()=>setBgcolor("pink")}
        className='outline-none px-4
        py-2 rounded-full text-black
        shadow-lg
        'style={{backgroundColor:"pink"}}>pink</button>
        <button
        onClick={()=>setBgcolor("purple")}
        className='outline-none px-4
        py-2 rounded-full text-white
        shadow-lg
        'style={{backgroundColor:"purple"}}>purple</button>
        <button
        onClick={()=>setBgcolor("lavender")}
        className='outline-none px-4
        py-2 rounded-full text-black
        shadow-lg
        'style={{backgroundColor:"lavender"}}>Lavender</button>
        <button
        onClick={()=>setBgcolor("white")}
        className='outline-none px-4
        py-2 rounded-full text-black
        shadow-lg
        'style={{backgroundColor:"white"}}>White</button>
        <button
        onClick={()=>setBgcolor("black")}
        className='outline-none px-4
        py-2 rounded-full text-white
        shadow-lg
        'style={{backgroundColor:"black"}}>Black</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App