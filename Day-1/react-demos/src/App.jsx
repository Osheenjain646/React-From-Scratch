// import React from 'react'
// import Greet from './components/Greet'
// import Header from './components/Header'
// import MainContent from './components/MainContent'
// import Footer from './components/Footer'
// import WelcomeMessage from './components/WelcomeMessage'
// import JSXRules from './components/JSXRules'

import Greetings from "./components/Greetings"
import ProductInfo from "./components/ProductInfo"
import ProductList from "./components/ProductList"
import UserList from "./components/UserList"
import User  from "./components/User"
import userImage from "./assets/7795121.jpg"


// const numbers =[1,2,3,4,5,6,7];

const App = () => {

  // const myname = "Osheen Jain";

  // const multiply = (a , b) => a*b;

  // const specialClass = "anything-you-want"

  return (
    <>
    {/* <div> */}
      {/* <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer> */}
      {/* <WelcomeMessage></WelcomeMessage> */}
      {/* <JSXRules></JSXRules> */}
      {/* 2+2 give the result as it is written  */}
      {/* {2 + 2}  simple java script expression syntax */}
      {/* <h1>{myname}</h1>  dynamic addition of the variable value */}
      {/* <p>My Friend List : {["Manoj Verma" , "Anurag Raj" , "Sankalp Srivastava"]}</p>
      <p>2 * 10 = { multiply(2 , 10)}</p> label and value
      <p className={specialClass}>This is a special class</p> */}
      {/* <Greetings></Greetings> */}
      {/* <ProductInfo></ProductInfo> */}
      {/* List Usage in React
      <section>
        {numbers.map((number)=>(
          <ul key={number}>
            <li>
              {number}
            </li>
          </ul>
        ))}
      </section> */}
      {/* <UserList></UserList>
      <ProductList></ProductList> */}
      <User
        img={userImage}
        name="Osheen Jain"
        age={20}
        isMarried={false}
        hobbies={["coding" , "Singing" , "Listening Music"]}
      />
    {/* </div> */}

    </>
  )
}

export default App