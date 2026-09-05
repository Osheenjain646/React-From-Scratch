import { lazy, Suspense ,StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import About from "./Components/Pages/About.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import Error from "./Components/Pages/Error.jsx";
import Body from "./Components/Body.jsx";
import RestaurantMenu from './Components/Pages/RestaurantMenu.jsx';
import Shimmer from './Components/Shimmer.jsx';

const Grocery = lazy(() => import('./Components/Grocery.jsx'))

// router configuration

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />, // replacement for outlet component
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactUs",
        element: <Contact />,
      },
      {
        path: "/restuarant/:resId", // Dynamic Route
        element: <RestaurantMenu />
      },{
        path: "/grocery",
        element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
      }
    ],
    errorElement: <Error />,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} /> {/* help to to provide route to the react to render your route's component */}
  </StrictMode>
);
