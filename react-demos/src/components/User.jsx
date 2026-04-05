import React from 'react'
// props can be used
const User = ( {img , name , age , isMarried , hobbies} ) => {
  return (
    <section>
        <img src={img} alt={img.name} width={500} height={400}/>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>IsMarried: {isMarried ? "Yes" : "No"}</h1>
      <h1>Hobbies: {hobbies.join(", ")}</h1>
    </section>
  )
}

export default User