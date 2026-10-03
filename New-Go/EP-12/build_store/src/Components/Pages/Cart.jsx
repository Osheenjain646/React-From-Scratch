import { useSelector } from "react-redux";
import CartList from "../CartList";
import useHandleClearItems from "../../Utils/useHandleClearItems";


const Cart = () => {

    const cartItems = useSelector((store) => store.Cart.items);
    const handleClearItem = useHandleClearItems();

    return (
        <div className="m-4 p-4">
            <div className="relative w-7/12 m-auto mb-20">
                <span className="text-2xl font-bold block text-center">Cart</span>
                <button 
                    className="absolute right-0 top-0 flex items-center gap-2 px-3 py-1.5 text-black border border-black bg-white font-bold hover:text-white hover:bg-black rounded-lg cursor-pointer transition-all hover:scale-105"
                    onClick={() => handleClearItem()}
                    >
                    <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                    <span>Clear Cart</span>
                </button>
            </div>
            <div className="m-auto w-7/12">
                <CartList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;