import React from 'react'

const Cart = () => {
    const items = ["item 1" , "item 2" , "item 3" , "item 4"];
    return(
        <div>
            <h1>Cart 🛒</h1>
            {items.length > 0 && <p> You have {items.length} items in your cart.</p>}

            <ul>
                <h4>Products</h4>

                {items.map((item) =>(
                    <li key={Math.random}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cart