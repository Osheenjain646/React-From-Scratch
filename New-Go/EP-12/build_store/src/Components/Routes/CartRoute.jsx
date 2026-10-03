import { lazy, Suspense } from "react"
import Shimmer from "../Shimmer"

const Cart = lazy(() => import("../Pages/Cart"))

const CartRoute = () => {
    return <Suspense fallback={<Shimmer />}><Cart /></Suspense>
}

export default CartRoute;