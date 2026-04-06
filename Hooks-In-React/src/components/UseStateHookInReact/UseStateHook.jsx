import React from 'react'
import { useState } from 'react'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'
import ExampleOne from './ExampleOne'
import ExampleTwo from './ExampleTwo'
import ExampleThree from './ExampleThree'
// use state hook allow us to track state in a functional component.
// state generally refers to data or properties that need to be tracking in an application.
// It is used to store and manage data that can change over time, such as user input, API responses, or any other dynamic information. 
// State allows components to be interactive and responsive to user actions or changes in data.
const UseStateHook = () => {
    // This is the syntax of useState hook. It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update that state.
    // This will re-render the component in the ui whenever the state is updated using the buttons.

    // This is the way to play with numeric data

    // const [count , setCount] = useState(0);

    // const increment = () => {
    //     setCount(count+1);
    // }

    // const decrement = () => {
    //     setCount(count-1);
    // }

    // This is the way to play with array data

    // const [friend , setFriend] = useState(["Manoj Verma" , "Anurag Raj" , "Unknown Person"])

    // const addOneFriend = () => setFriend([...friend , "Sankalp Srivastava"])

    // const removeOneFriend = () => setFriend(friend.filter((friends) => friends !== "Unknown Person"))

    // const updateOneFriend = () => setFriend (friend.map((friends) => friends === "Anurag Raj" || friends === "Manoj Verma" ? "Legend" : friends))

    // This is the way to play with object data

    // const [movie , setMovie] = useState({
    //     name : "Interstellar",
    //     director: "Christopher Nolan",
    //     releaseYear: 2019
    // });

    // const handleClick = () =>setMovie({...movie,releaseYear: 2014})

    // Thus is the way to play with array of objects data

    // const [movies , setMovies] = useState([
    //     {
    //         name: "Interstellar",
    //         director: "Christopher Nolan",
    //         releaseYear: 2019
    //     },
    //     {
    //         name: "Inception",
    //         director: "Christopher Nolan",
    //         releaseYear: 2010
    //     },
    //     {
    //         name: "The Dark Knight",
    //         director: "Christopher Nolan",
    //         releaseYear: 2008
    //     }
    // ])

    // const handleClick = () => setMovies(movies.map((movie) => movie.name === "Interstellar" ? {...movie , name: "Interstellar Updated"} : movie))

    // Sharing the sate between components is also possible with useState hook.
    // We can lift the state up to a common parent component and pass it down as props to the
    // child components that need access to it.
    // This allows multiple components to share and update the same state, ensuring that they stay in sync with each other.
    // Sharing the state between the components

    // const [count , setCount] = useState(0);

    // Arrow Function as initial value
    
    

    return (
    // with numeric data
    // <div>
    //     <h1>{count}</h1>
    //     <button onClick={increment}>+</button>
    //     <button onClick={decrement}>-</button>
    // </div>

    // with array data
    // <div>
    //     {friend.map((friends, index) =>(
    //         <li key={index}>{friends}</li>
    //     ))}

    //     <button onClick={addOneFriend}>Add New Friend</button>
    //     <button onClick={removeOneFriend}>Remove One Friend</button>
    //     <button onClick={updateOneFriend}>Update Friends</button>
    // </div>

    // with object data

    // <div>
    //     <h1>{movie.name}</h1>
    //     <h1>{movie.director}</h1>
    //     <h1>{movie.releaseYear}</h1>

    //     <button onClick={handleClick}> Update the details </button>
    // </div>

    // with array of objects data

    // <div>
    //     {movies.map((movies , index) =>(
    //         <li key={index}>
    //             <h1>Movie Name: {movies.name}</h1>
    //             <h1>Movie's Director: {movies.director}</h1>
    //             <h1>Release Year: {movies.releaseYear}</h1>
    //         </li>
    //     ))}

    //     <button onClick={handleClick}> Update Movies </button>
    // </div>

    // Sharing the state between components
    // <div>
    //     <ComponentOne
    //     count={count}
    //     OnIncrement = {() => setCount(count + 1)}
    //     />
    //     <ComponentTwo
    //     count={count}
    //     OnIncrement = {() => setCount(count + 1)}
    //     />
    // </div>

    // <ExampleOne></ExampleOne>

      // <ExampleTwo />

      <ExampleThree/>

  )
}

export default UseStateHook