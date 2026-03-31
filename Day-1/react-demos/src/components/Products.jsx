import React from 'react'

const Products = ({Product_Name , Product_Price}) => {
  return (
    <div>
        <h3>Products Name: {Product_Name}</h3>
        <h3>Product Price: ${Product_Price}</h3>
    </div>
  )
}

export default Products