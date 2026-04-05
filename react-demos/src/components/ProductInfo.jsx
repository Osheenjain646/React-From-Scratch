import React from 'react'

const ProductInfo = () => {

    const Product ={
        name : "Laptop",
        price : 1500,
        availability : "In Stock"
    }

  return (
    <div>
        <h1>Product Info :</h1>
        <h5>name : {Product.name}</h5>
        <h5>price : ${Product.price}</h5>
        <h5>availability : {Product.availability}</h5>
    </div>
)
}

export default ProductInfo