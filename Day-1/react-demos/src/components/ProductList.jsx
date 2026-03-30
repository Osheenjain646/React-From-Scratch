import React from 'react'

const products = [
    {id:1 , name:"Phone" , price:"$699"},
    {id:2 , name:"Laptop" , price:"$1200"},
    {id:3 , name:"HeadPhones" , price:"$199"}
]

const ProductList = () => {
  return (
    <div>
        <h1>Product List</h1>
        {products.map(( { id , name ,price } ) => (
            <ul key={id}>
                <div>Name: {name}</div>
                <div>Price: {price}</div>
            </ul>
        ))}
    </div>
  )
}

export default ProductList