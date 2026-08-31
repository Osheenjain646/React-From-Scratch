# Routing in React

1**for creating any route you have to build a routing configuration first in your main file like app.js from where all the componenets are being rendered.
a** first build the configuration using the createBrowserRouter from the react-router-dom.

b** then use the routerProvider component from the react-router-dom and pass the router configuration to it. it is a component that will provide the router configuration to all the components in the application.

c** eg:-

```js
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                // children can have its own path attribute
                // if your app has a common parent component for all the routes, then you can use the children attribute
                // and this component is rendered only when the route is matched
            }
        ]
    }
])
```

2** To provide the configuration to our app we use react's RouterProvider component and use that component in the root file like main.jsx during the render and pass the appRouter to the router attribute in the RouterProvider component that is actually being rendered as the root component of the application.

3**if you have different pages like about, contact, etc you can create a component for each page and then use the children attribute in the routing configuration to provide the path and the component for each page.

4**Or wheather you can provide the paths to diffrent pages in the createBrowserRouter configuration directly like this

```js
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contactUs",
        element: <Contact />,
    }
]);
```

5**To Handle error or any other random route you can use the errorElement attribute in the createBrowserRouter configuration and render the Error component in it.
And inside the error component you can use the useRouteError hook to get the error information and show the specific error message to the user. and can provide the option to navigate back to the homepage by using the Link component from the react-router-dom.

```js
import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    return (
        <div className="error">
            <h1>Error: {error.message}</h1>
            <Link to="/">Go to Home</Link>
        </div>
    );
};
```

6**If you want to render diffrent path with different compnent and a specific part of the main compnent should be same for all the routes you can use the children attribute in the createBrowserRouter configuration and can use the

```js
<Outlet />
```

component from the react-router-dom in the main component to render the specific part of the main component.

```js
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
```

like this.
and in the children attribute the first attribute is the path and the second attribute is the element to be rendered for that path.

for eg:-

```js

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contactUs",
                element: <Contact />,
            }
        ],
        errorElement: <Error />,
    }
]);
```

**That's why react is known as single page application just 1 page is loaded with just re rendering the components that are needed and that's how react is fast.

## Two types of routing

### Client Side Routing (CSR)

Client Side Routing is the type of routing where the routing is done on the client side i.e. in the browser.

### Server Side Routing (SSR)

Server Side Routing is the type of routing where the routing is done on the server side i.e. in the server.

7**When you want to set a dynamic route i.e. a route that will have a dynamic path you can use the "path: "/restaurants/:id"," in the createBrowserRouter configuration.
Define the route with a colon :. The colon tells React Router that the following segment is a dynamic parameter.

8**To fetch the data from the API using the dynamic parameter id you can use the useParams hook from the react-router-dom and use it in the component that is rendered for that route and use it with the fixed API link and the id to call diffrent API for different data.

9**The key parameter must always be passed at parent component not in nested

// As Swiggy api keys are chargable nowadays can't use it to show data from real server just learn how to do it simple.
