# EP-12 Notes

## Learning about redux store (the data store) using the redux toolkit

- It works at the data layer of the application.
- Redux is not mandatory it is application based like for large apps.

Q- Are Redux and React are the same??
Answer:- Yes. React and Redux are different libraries, but they are commonly used together.

React

React is a JavaScript library for building user interfaces.

It helps you create:

Components
   ↓
UI
   ↓
User interactions
   ↓
State changes
   ↓
UI re-renders

For example:

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}

React handles the UI and component state.

Redux

Redux is a separate JavaScript library for managing application state.

Its purpose is roughly:

             Redux Store
                  │
        ┌─────────┼─────────┐
        ↓         ↓         ↓
      Navbar    Cart      Profile

Multiple components can access and update shared state through the store.

Example:

const count = useSelector(state => state.counter.value);

and:

dispatch(increment());
How they work together

Think:

React
│
├── Components
├── JSX
├── UI rendering
├── Props
└── Local state
        +
Redux
│
├── Global/shared state
├── Store
├── Actions
└── Reducers

So you might have:

                 React App
                    │
          ┌─────────┴─────────┐
          │                   │
       React UI          Redux Store
          │                   │
    Components          Global State
          │                   │
          └────── interact ───┘
Important

You do not need Redux to use React.

You can build an entire React application using:

React + useState + useEffect + Context API + custom hooks.

Redux becomes useful when your application has complex shared state that is difficult to manage cleanly with only component state and Context.

One-line interview answer

React is a UI library for building component-based interfaces, while Redux is a separate state-management library used to manage shared application state. They can be used together, but Redux is not a part of React.

Q- tell me about that too an also about the Zustand for the same work.

Absolutely. Redux Toolkit (RTK) and Zustand solve the same broad problem: managing state that needs to be shared across multiple React components. But they approach it very differently.

1. First, the big picture

You have:

React
│
├── useState
├── useReducer
├── Context API
│
└── External state-management libraries
      │
      ├── Redux / Redux Toolkit
      └── Zustand

Think of them as different levels of state management.

Small/local state
       ↓
useState
       ↓
Shared tree state
       ↓
Context
       ↓
Complex global state
       ↓
Redux Toolkit / Zustand

This isn't a strict rule—you can use these tools in different combinations.
**
2. What is Redux?

Redux is a state-management library.

Its central idea is:

Keep shared application state in one predictable store and update that state through defined actions.

Imagine an e-commerce application:

                    Redux Store
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
      Cart           User          Products
        │              │              │
        ↓              ↓              ↓
     Cart.jsx      Navbar.jsx     Product.jsx

Instead of passing:

App
 ↓ cart
Layout
 ↓ cart
Navbar
 ↓ cart
CartIcon

components can access the store.
**
3. Redux's important concepts

There are several terms you should understand.

Store

The store contains your application state.

{
    user: {...},
    cart: [...],
    products: [...]
}
Action

An action describes what happened.

For example:

{
    type: "cart/addItem",
    payload: product
}

It doesn't directly change the state.

It describes the event:

"Add this product to the cart."

Reducer

A reducer defines how the state changes in response to an action.

Conceptually:

Current State
     +
  Action
     ↓
  Reducer
     ↓
New State
Dispatch

dispatch() sends an action to Redux.

dispatch(addItem(product));

Flow:

User clicks "Add to Cart"
          ↓
dispatch(addItem(product))
          ↓
Redux receives action
          ↓
Reducer updates state
          ↓
Store changes
          ↓
React components re-render.
**
4. What is Redux Toolkit?

This is extremely important.

You may hear:

Redux

and:

Redux Toolkit

They are related but Redux Toolkit is not simply another name for Redux.

Redux Toolkit is the official recommended way to write Redux logic.

It provides utilities that make Redux much easier to use.

The package is:

npm install @reduxjs/toolkit react-redux

You normally use:

Redux Toolkit
     +
React Redux
Why two packages?

Redux Toolkit

→ helps you create/manage the Redux store, slices, reducers, actions, etc.

React Redux

→ connects React components to the Redux store.
**
5. Redux Toolkit example

Suppose we want a counter.

Step 1 — Create a slice
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",

    initialState: {
        value: 0
    },

    reducers: {
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

This creates:

counterSlice
│
├── State
│    └── value
│
├── Actions
│    ├── increment
│    └── decrement
│
└── Reducer
**
6. Create the store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

Now the store looks conceptually like:

{
    counter: {
        value: 0
    }
}
7. Give the store to React

Usually at the root:

```js

import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);

```

Now all descendant components can access the Redux store.
**
8. Reading Redux state:-

```js

import { useSelector } from "react-redux";

function Counter() {
    const count = useSelector(
        state => state.counter.value
    );

    return <h1>{count}</h1>;
}
```

useSelector() means:

"Give me the part of Redux state that I need."
**
9. Updating Redux state:-

```js

import { useDispatch } from "react-redux";
import { increment } from "./counterSlice";

function Counter() {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(increment())}>
            +
        </button>
    );
}
```

The complete flow:

             Redux Store
                 │
                 │
          counter.value
                 │
                 ↓
          useSelector()
                 │
                 ↓
              React
                 │
              Button
                 │
             onClick
                 │
                 ↓
        dispatch(increment())
                 │
                 ↓
             Reducer
                 │
                 ↓
          State changes
                 │
                 ↓
             React
            re-renders
**
10. Now Zustand

Zustand is another state-management library.

It solves a similar problem:

Redux                  Zustand
  │                       │
  └── Shared state ───────┘

But Zustand is much more minimal.

You can create a store directly:

```js

import { create } from "zustand";

const useCounterStore = create((set) => ({
    count: 0,

    increment: () =>
        set((state) => ({
            count: state.count + 1
        })),

    decrement: () =>
        set((state) => ({
            count: state.count - 1
        }))
}));
```

That's basically your store.
**
11. Using Zustand in a component

```js

function Counter() {
    const count = useCounterStore(
        state => state.count
    );

    const increment = useCounterStore(
        state => state.increment
    );

    return (
        <>
            <h1>{count}</h1>

            <button onClick={increment}>
                +
            </button>
        </>
    );
}
```

Notice something important.

With Redux, you typically have concepts like:

Store
Slice
Action
Reducer
Dispatch
Provider

With Zustand, the code can be much more direct:

Store
 ↓
State + Actions
 ↓
Component
**
12. Zustand does not need ```<Provider>```

This is one of the biggest differences.

Redux

You normally have:

```js

<Provider store={store}>
    <App />
</Provider>
```

Zustand

You create the store:

```js

const useStore = create(...);
```

and use it directly:

```js
const count = useStore(state => state.count);
```

No Redux-style Provider is required for the normal Zustand pattern.
**
13. Redux vs Zustand

Here's the comparison you should remember:

| Feature | Redux Toolkit | Zustand |
| --- | --- | --- |
| Purpose | Global/shared state | Global/shared state |
| Separate library from React | Yes | Yes |
| Official Redux approach | Yes | N/A |
| Boilerplate | More | Less |
| Store | Yes | Yes |
| Actions | Yes | Usually functions in store |
| Reducers | Yes | No reducer requirement |
| dispatch() | Yes | Usually no |
| Provider required | Usually yes | No |
| Middleware | Yes | Yes |
| DevTools | Excellent | Supported |
| Structure | More opinionated | More flexible/minimal |
| Good for large complex state | Yes | Yes |
| Learning curve | Higher | Lower |

**
14. The biggest conceptual difference

Redux follows a more structured flow:

Component
    ↓
dispatch(action)
    ↓
Reducer
    ↓
Store
    ↓
Component

Zustand is more direct:

Component
    ↓
store action
    ↓
Store updates
    ↓
Component

For example:

Redux

```js
dispatch(increment());
```

Zustand

```js
increment();
```

That's one reason Zustand often feels simpler.
**
15. Does Zustand replace React's useState?

Not necessarily.

Suppose you have:

```js
function LoginForm() {
    const [email, setEmail] = useState("");
    
    // ...
}
```

Only LoginForm cares about email.

You probably don't need Zustand.

LoginForm
   │
   └── email → useState

But suppose:

                 App
                  │
       ┌──────────┼──────────┐
       ↓          ↓          ↓
    Navbar      Cart       Checkout
       │          │          │
       └──── all need cart ──┘

Then shared state management can make sense.
**
16. Where Context fits

Now you have three common approaches:

Local state

```js
const [count, setCount] = useState(0);
```

Use when one component or a small local area needs the state.

Context

```js
const user = useContext(UserContext);
```

Use when you want to make a value available to many components in a component tree.

Redux / Zustand

```js
const cart = useCartStore(...);
```

or:

```js
const cart = useSelector(...);
```

Use when you have more substantial shared application state and want dedicated state-management tooling.
**
17. Don't make this mistake

A common beginner thought is:

"If I have global state, I should put everything in Redux/Zustand."

❌ Not necessary.

Imagine:

App
 ├── Modal
 │    └── isOpen
 │
 └── Cart
      └── items

isOpen may only matter to the Modal.

So:

```js
const [isOpen, setIsOpen] = useState(false);
```

is perfectly fine.

But:

Navbar
Product
Cart
Checkout
OrderSummary

all needing cartItems is a much better candidate for shared state.
**
18. A practical decision tree

When you're building a React application, think:

Does only one component need the state?
            │
           YES
            ↓
         useState

Does several nearby components need it?
            │
           YES
            ↓
      Lift state up

Does many components in a tree need the same value?
            │
           YES
            ↓
         Context

Is the client-side state becoming complex
and shared throughout the application?
            │
           YES
            ↓
    Redux Toolkit / Zustand

Is the data primarily coming from an API/server?
            │
           YES
            ↓
   Server-state solution
   (e.g. TanStack Query)
**
19. Interview perspective

If an interviewer asks:

"Is Redux part of React?"

Answer:

No. React and Redux are separate libraries. React is primarily used for building the UI, while Redux is a state-management library. React applications can use Redux through the react-redux integration.

"What is Redux Toolkit?"

Redux Toolkit is the official recommended approach for writing Redux logic. It simplifies store configuration, reducers, actions, and immutable state updates.

"What is Zustand?"

Zustand is a lightweight state-management library for React applications. It provides a simple store-based API and generally requires less boilerplate than Redux.

"Redux vs Zustand?"

Don't memorize "one is better." Think:

Redux Toolkit
→ structured
→ opinionated
→ extensive ecosystem/tooling
→ good for complex predictable state flows

Zustand
→ minimal
→ simple API
→ less boilerplate
→ flexible store-based state management

The important thing is that both are solutions to the shared/global client-state problem, while React itself is the UI library.

## Redux

- A JS library for predictable and maintainable global state management.

- The older way is known as the Vanilla Redux.(The normal redux without any tools.)

- Redux is not part of React. It is a separate library.

Other Libraries from the Redux Team:-

Redux Toolkit:- The official, opinionated, batteries-included toolset for efficient Redux development

React Redux:- Official React bindings for Redux

Reselect:- A memoized selector library for Redux.

- Building a redux store for the cart of the application using the redux toolkit.

- Redux Store is a kind of big JS Object with lot of data kept in a gloabal central place of the application to access the data anywhere in the app.

- It is very large object of data inside it so we divide it in slices.

**Slice** :- A small portion of the data.

- We make slices as on the basis of the kind of data related to each other.Like userInfo card slice , theme slice , cart data slice or many more.

- This is based on logical seperation of the data.

- As we want to add a item to the cart we click the add button and we ***dispatch(action)*** (dispatching an action) this dispatch of the action calls a ***function*** which modify the cart slice data (we can't directly modify the data).

- These functions is known as ***reducers***.

- Now how to get the data from the redux store slice into our component (from cart slice to the cart page and also to update the count of items inside the cart to show it side by of the cart icon and to get the data of the cart slice in the cart page too), we use **Selectors**.

- The phenomena of using the selector is known as ***subscribing to the store*** which means that that cart component is in sync with the cart slice of the redux store as whenever the data inside the slice of the cart changes the cart component automatically changes as per them.

**

         click                      Calls                      which
**ADD** -------> dispatch(action) ---------> reducer function -------> updates the data inside the cart slice of the redux store <----
              Using                                                    Subscibed to the Store                                        |
**Cart** -----------------> Selctor --------------------------------------------------------------------------------------------------

- When you click the ADD button the it dispacthes an action which calls the reducer function which updated the data inside the cart slice of the redux store.And thee cart is subscribed to the store as the data updated inside the store the Cart componenet will also be changed on the go.
The commented part in shown in UI and other thing will happens in the background.

## Steps

- Install:- npm install @reduxjs/toolkit and npm install react-redux
- Build our store
- Connect store to the app
- Create a slice in the store
- then dispatch the action as dispatch(action)
- read the data using the selctor

- Build the store using the **configureStore()** from @reduxjs/toolkit as this provide the redux (kind of methods) as this isthe job of the redux toolkit.
- connect this store to the app using the **Provider** from the react-redux which acts as a bridge between the app and the redux store, as this the job of the react-redux to connect the redux store to react.

```js
const ReduxStore = configureStore();
```

## Provider as the wrapper of the app to provide the store to the whole app

- Now wrap the whole application inside this Provider and pass store={ReduxStore} as the props to it.You can wrap the specific part if you want which means that only this part of the application require the store access and protect the store from access from any other component.

```js
<Provider store={ReduxStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName: setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
```

- Now craete different files for your slices in the redux store

## Slice boilerprate code

```js

import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({

    // name of the lice
    name: "Cart",

    // initial state of the slice
    initialState: {
        items: []
    },

    reducers: {
        // actions with name and the reducer function for it
        // state of the slice and the action to do
        addItem: (state , action) => {   // reducer function which modify the slice 
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => { // as the action is fixed no need to get it
            state.items.length = 0; // this will make the cart clear again
        }
    }
});

// export the actions of the slice
export const { addItem , removeItem , clearCart } = CartSlice.actions;

// export the reducers of the slice
export default CartSlice.reducer;

// as the create slice will make the following

/*
{
    actions: {
        addItem,
        removeItem,
        clearCart
    }

    reducer:{

    }
}
*/

// so we have to export all these


```

```js

state.items.push(action.payload);

```

- In theis the action is like a package(redux toolkit) which contains the type as the label which action or function is called and payload conatins the actual data passed to redux store to store it in the cart slice.

- we export two times as described above.

## Connect the slices in the store by reducer of the store containing the reducers of the different slices

- Now after making the slices you have to connect all it to the main ReduxStore.So we make the reducer of the ReduxStore as ReduxStore also modify thier state of date and this reducer is responsiblee for that job and this reducer is the combination of all the small stores ( slice ) as having the slice name and their reducer attch to it by importing it in the file.

- configureStore({}) conatains an object of the data.

```js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";

// Used to build the store
const ReduxStore = configureStore({
    reducer: {
        // contains the multiple reducers of multiple slices of the redux store
        Cart: cartReducer,
    }
});

export default ReduxStore;

```

- Now read the data from the cart means how many items is in the cart by subscribing the cart to the store using a selector.

## useSelctor usage Guide

- this slector is nothing but hook in react known as **useSelector((store) => store.cart.items)** hook from the react-redux library , you can tell them which part of the store they can access here or they are subscribed to.Like in the header you want the cart slice in the cart logo and it's component.

```js

const cartItems = useSelector((store) => store.Cart.items);

```

## useDispatch usage Guide

- Now need to dispatch an action when we click the add button to add the item to the cart we need to dispatch it using a function or basically a hook known as **useDispatch()** provided by the react-redux library.

```js

const dispatch = useDispatch()

const handleAddItem = (item) => {
    dispatch(addItem(item));
}

```

## Important Learning:-

Difference between the onClick callings:-

| Code | What happens? |
| ------ | -------------- |
| `onClick={handleAddItem}` | Passes function reference; runs on click ✅ |
| `onClick={() => handleAddItem(item)}` | Passes wrapper function; calls with `item` on click ✅ |
| `onClick={handleAddItem(item)}` | Calls immediately during render ❌ |

- So use it wisely just upper two are correct.

- Now make the page of the cart with items in it and access the cart items from redux store by subscribing it again using useSelector hook from react-redux.

- Now make a clear cart button in the Cart.jsx and using the dispatch access the clearCart reducer and clear the cart fully just by making it's length to be zero or by any other way.

## What useSelector Do

- When you use useSelctor and subscribe to the store and you require only a single slice or part of the store then you must only subscribe to that particular part as if you subscribe to the whole store and extract the part or sslice from it that will work perfectly fine but it is very less efficient.So use to subscribe to the part of the store you need only there.

## Difference Between the reducer of the store and the reducers of the slices

- One major difference is that between the **reducer** of the whole store and the **reducers** of the slice is that the **reducer** of the whole store is just the one **reducer** of the whole store which further contains all the **reducer (slice.reducer as export default cartSlice.reducer)** of the slices and the **reducer (cartSlice.reducer)** of the slice is the combination of all the **reducers** of the slice which contains all the **reducer functions**

```js

reducers: {
    // mutating the state
    addItem: (state, action) => {
        state.items.push(action.payload);
    },
    removeItem: (state) => {
        state.items.pop();
    },
    clearCart: (state) => {
        state.items.length = 0;
    }
}

```

of the slice of the store and they are the main reducers which are responsible for the modifying the data inside the slice.

## Immer JS usage

- The redux is using the immer JS to modify the immutable state behind the scene by making a new state as the copy of the state and change the new state and return it back to the redux store.This is the way of writing the vanilla redux (the older way).

## What is Immer JS

- immer is just a tiny package that is used to modify the immutable state behind the scene by making a new state as the copy of the state and change the new state and return the new state by making the difference (diff) between the old and new state.And this new state is updated back in the store.

- **Inside the reducer, the RTK(Redux ToolKit) says that either you mutate the state or just return the new state.**

- Example:

| Mutation (Allowed in RTK + Immer) | Return New State (Allowed in RTK + Immer) |
| -------------------------------- | -------------------------------------- |
| `state.items.push(item)` ✅ | `return [...state.items, item]` ✅ |
| `state.items = []` ✅ | `return { items: [] }` ✅ |
| `state.items.pop()` ✅ | `return state.items.slice(0, -1)` ✅ |

Both approaches are acceptable in Redux Toolkit because Immer handles the heavy lifting of creating new immutable versions behind the scenes.

-
