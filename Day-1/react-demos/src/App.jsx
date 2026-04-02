// import React from 'react'
// import Greet from './components/Greet'
// import Header from './components/Header'
// import MainContent from './components/MainContent'
// import Footer from './components/Footer'
// import WelcomeMessage from './components/WelcomeMessage'
// import JSXRules from './components/JSXRules'

import IconComponent from "./components/IconComponent"

import ProfileCard from "./components/ProfileCard"

import StyleCard from "./components/StyleCard"


// import Greetings from "./components/Greetings"
// import ProductInfo from "./components/ProductInfo"
// import ProductList from "./components/ProductList"
// import UserList from "./components/UserList"
// import User  from "./components/User"
// import userImage from "./assets/7795121.jpg"
// import Person from "./components/Person"
// import Card from "./components/Card"
// import Password from "./components/Password"
// import Products from "./components/Products"
// import Cart from "./components/Cart"
// import Greeting from "./components/Greeting"
// import UserStatus from "./components/UserStatus"
// import Weather from "./components/Weather"


// const numbers =[1,2,3,4,5,6,7];

const Button = () =>{
  const handleClick = () => console.log(Math.round(Math.random() * 10))
  return <button onClick={handleClick} style={{width:"80px" , height:"40px" , fontSize:"10px" , backgroundColor:"red" , color:"lightblue"}}>Random Number</button>
}

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
      {/* <User
        img={userImage}
        name="Osheen Jain"
        age={20}
        isMarried={false}
        hobbies={["coding" , "Singing" , "Listening Music"]}
      /> */}
      {/* <Person
        name="Osheen Jain"
        age={20}
      /> */}
      {/* <Products
        Product_Name="Laptop"
        Product_Price={5666}
      /> */}
      {/* Using the Children instead */}
      {/* <Card>
        <h1>This my card 1</h1>
        <p>Content of the card 1</p>
      </Card>
      <Card>
        <h1>This my card 2</h1>
        <p>Content of the card 2</p>
      </Card>
      <Card>
        <h1>This my card 3</h1>
        <p>Content of the card 3</p>
      </Card> */}
      {/* can use multiple times to get the same data */}
      {/* conditional rendering */}
      {/* <section>
        <Password
          isValid={false}
        />
      </section> */}
      {/* <Cart /> */}
    {/* </div> */}
    {/* <Weather
    temperature={26}
    />
    <UserStatus
    loggedIn={false}
    isAdmin={false}
    />
    <Greeting
    timeOfDay="Afternoon"
    /> */}
    <StyleCard/>
    <br></br>
    <ProfileCard/>
    <br></br>
    <IconComponent/>

    <div>
      <Button/>
    </div>
    </>
  )
}

export default App