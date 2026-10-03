import { useSelector } from "react-redux";

const Cart_logo = () => {

    // Subscribing to the store using the Selector
    const cartItems = useSelector((store) => store.Cart.items);
    
    return (
        <div className="relative flex items-center gap-1 cursor-pointer hover:text-orange-500 hover:scale-105 transition-all duration-200">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                />
            </svg>

            <span className=" absolute-top-2 left-3 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
            </span>

            <span className="text-sm font-bold">
                Cart
            </span>

        </div>
    );
};
export default Cart_logo;