import React from 'react'

const users = [
    {id:1 , name:"Alice" , age:25},
    {id:2 , name:"Bob" , age:30},
    {id:3 , name:"Charlie" , age:22}
];

const UserList = () => {
  return (
    <div>
        <h1>User List</h1>
        {users.map(( { id , name , age } )=>(
            <ul key={id}>
                <div>Name: {name}</div>
                <div>Age: {age}</div>
            </ul>
        ))}
    </div>
  )
}

export default UserList