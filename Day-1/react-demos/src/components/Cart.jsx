import React from 'react'

const Cart = () => {
    const items = ["item 1" , "item 2" , "item 3" , "item 4"];
    return(
        <div>
            <h1>Cart 🛒</h1>
            {items.length > 0 && <p> You have {items.length} items in your cart.</p>}
        </div>
    )
}

export default Cart