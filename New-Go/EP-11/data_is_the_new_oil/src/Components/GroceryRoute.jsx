import { lazy, Suspense } from "react"
import Shimmer from "./Shimmer"

const Grocery = lazy(() => import("./Grocery.jsx"));

const GroceryRoute = () => {
    return <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
}

export default GroceryRoute;