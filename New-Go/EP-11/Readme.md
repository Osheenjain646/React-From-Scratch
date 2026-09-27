# Notes EP-11: Data is the New Oil

---

## 1. Data is the new Oil (Data Layer vs. UI Layer)

- What I Add
- as the data is needed to be handle properly just like the oil we need to transport it properly from one place to another place.And update the UI according to the data.

- What You Will Add
- Concept (react.dev):-mA React application consists of two layers:
- Data Layer:- State (`useState`, `useReducer`), props, context, and JavaScript business logic.
- UI Layer:- JSX markup, CSS styling, and HTML elements rendered in the browser.
- Core Principle:- "UI is a function of state"* (`UI = f(data)`). Whenever the data layer updates, React re-renders the UI layer automatically. Data flows top-down in one direction (unidirectional data flow).
- **Search Keywords:** `React unidirectional data flow`, `React declarative UI`, `UI as a function of state`.

- Example

```jsx
import { useState } from "react";

function UserProfile() {
  // Data Layer
  const [user, setUser] = useState({ name: "Osheen", status: "Active" });

  // UI Layer
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Status: {user.status}</p>
      <button onClick={() => setUser({ ...user, status: "Away" })}>
        Set Away
      </button>
    </div>
  );
}
```

---

## 2. Higher Order Components (HOC)

- What I Add
- These are the components that takes a component as input and returns a component.

- It adds extra feautre to the existing components.
- It is also called as react utilities.

- These are the pure functions as they do not change anything for the existing component just add new features to it.

- Why use HOC
- It is used to share the same functionality between multiple components.

eg: -

```js
const withWidth = (Componenet) => {
    return function withWidthWrapper(props){
        return <Componenet {...props} width={window.innerWidth} />
    }
}

export default withWidth;
```

Adding a promted label on top of promoted restuarents using HOC.

- What You Will Add
- Concept (react.dev):- A Higher-Order Component is an advanced composition pattern:  
  `const EnhancedComponent = higherOrderComponent(WrappedComponent);`  
  It is a pure function that takes a component, wraps it in a container component, passes all props through (`{...props}`), and renders enhanced UI without mutating the input component.
- **Modern React Note:** In modern React (React 18/19), **Custom Hooks** are the standard way to share stateful logic, while HOCs are commonly used for UI decoration (e.g., badges, wrappers, analytics, and auth guards).
- **Search Keywords:** `Higher-Order Components React`, `React component composition`, `Custom Hooks vs HOC`.

- Example

```jsx
// 1. Base Component
export const RestaurantCard = ({ resData }) => {
  return (
    <div className="card">
      <h3>{resData.name}</h3>
      <p>{resData.cuisines.join(", ")}</p>
    </div>
  );
};

// 2. Higher-Order Component (Promoted Label Decorator)
export const withPromotedLabel = (WrappedComponent) => {
  return function PromotedCard(props) {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
          Promoted
        </span>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// 3. Usage
export const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
```

---

## 3. Controlled and Uncontrolled Components

- What I Add
- needed to handle data layer and UI layer accordingly with perfect management of data provided

- Controlled Components:-
These are the components which are being controlled by it's parent component through some logic like state variable or using the boolean value that the child is allowed to do this thing or no and the permission is given by it;s parent component only or it's more upper components i.e. anscestors.

- Uncontrolled Components:-
These are the components which are not controlled by it's parent or anscestor component and free to do anything own it's own as a logic written inside it to do something but not controlled ny the parent or anscestor componet.

It's not have it's own definition just a concept or philosophy just to understand what is being done.

- What You Will Add
- Concept (react.dev):-
- **Uncontrolled Component:** Manages and keeps its own local state (e.g. child has its own `useState` or DOM `<input />` with `useRef`). The parent component cannot dictate its active state or inspect its values easily.
- **Controlled Component:** Has its state and behavior driven strictly by `props` passed from its parent component. Whenever user interaction occurs, the child triggers a callback prop (e.g. `onToggle`), letting the parent decide how and when to update the state.
- **When to Use:** Use controlled components when sibling components need to be kept in sync (e.g., only one accordion panel open at a time) or when parent state needs to serve as the single source of truth.
- **Search Keywords:** `Controlled vs Uncontrolled components react.dev`, `React single source of truth`, `React controlled inputs`.

- Example

```jsx
// 1. Uncontrolled: Component manages its own state internally
function UncontrolledPanel({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && <p>{description}</p>}
    </div>
  );
}

// 2. Controlled: State and actions are controlled entirely by parent via props
function ControlledPanel({ title, description, isOpen, onToggle }) {
  return (
    <div>
      <button onClick={onToggle}>{title}</button>
      {isOpen && <p>{description}</p>}
    </div>
  );
}
```

---

## 4. Accordian design

- What I Add;-
just need to add a logic that when you want to show your items in accordian with just a state variable that decide that wheather the current accordian is open or not if it is open then show the ul of li's and if it is closed then hide the ul of li's i.e. don't render it on the UI inside the div of the accordian having a fixed header button having that open or not logic with onClick event on the header button that will toggle the state variable to open or close the accordian and updating the UI accordingly with the state variable and all the accordian div's will reside inside the div having class res-menu-accordians-container having the html with accordian.map and inside that map i need to add the header button and the ul of li's in a nested way.

- What You Will Add
- Concept (react.dev):- An Accordion list is the prime practical example of combining **Lifting State Up** with **Controlled Components**:
  - The parent component (`RestaurantMenu`) stores `openIndex` in its state.
  - Sibling accordion categories receive `isOpen = index === openIndex`.
  - Toggle handler: `setOpenIndex(isOpen ? null : index)` ensures clicking an open accordion collapses it, while clicking a closed one closes all other open categories and opens the selected one.
- **Search Keywords:** `React collapsible accordion pattern`, `Conditional rendering in React lists`, `React state toggle`.

- Example

```jsx
import { useState } from "react";

function RestaurantMenu({ menuAccordions }) {
  const [openIndex, setOpenIndex] = useState(0); // First accordion open by default

  return (
    <div className="res-menu-accordians-container max-w-xl mx-auto">
      {menuAccordions.map((accordion, index) => {
        const isOpen = index === openIndex;

        return (
          <div key={accordion.title + index} className="border-b py-2">
            {/* Header button triggers toggle */}
            <button
              className="w-full flex justify-between font-bold py-2 cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{accordion.title} ({accordion.itemCards.length})</span>
              <span>{isOpen ? "▲" : "▼"}</span>
            </button>

            {/* Conditionally rendered dishes list */}
            {isOpen && (
              <ul className="pl-4 py-2 space-y-1 text-gray-700">
                {accordion.itemCards.map((item) => (
                  <li key={item.id}>• {item.name} - ₹{item.price / 100}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
```

---

## 5. Lifting the state up

- What I Add
Basically means when you want two state two do work by syncing with each other like all other accordians will collapse when other accordian get opens.

- What You Will Add

- Concept (react.dev):-
When you want two or more sibling components to synchronize and coordinate their state, remove state from each individual child and **lift it up to their closest common parent component**.
- **The 3-Step Recipe from React Docs:**
  1. **Remove local state** from the child components.
  2. **Pass down hardcoded/parent state as props** to the child components.
  3. **Pass down callback handlers** from the parent so child components can request state changes when interacted with.
- **Why It Matters:** Creates a "single source of truth," prevents desynchronized states, and gives the parent component full control over UI behavior across siblings.
- **Search Keywords:** `Sharing state between components react.dev`, `Lifting state up React`, `State hoisting React`.

- Example

```jsx
import { useState } from "react";

// 1. Parent holds the lifted state
function AccordionParent() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h2>Menu Categories</h2>
      <Panel
        title="Burgers"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(activeIndex === 0 ? null : 0)}
      >
        Cheeseburger, Veggie Burger, Chicken Burger
      </Panel>

      <Panel
        title="Drinks"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(activeIndex === 1 ? null : 1)}
      >
        Iced Tea, Lemonade, Cold Coffee
      </Panel>
    </div>
  );
}

// 2. Child is a controlled component receiving state & handler via props
function Panel({ title, children, isActive, onShow }) {
  return (
    <div className="panel border p-3 my-2">
      <div className="flex justify-between">
        <h3>{title}</h3>
        <button onClick={onShow}>{isActive ? "Hide" : "Show"}</button>
      </div>
      {isActive && <div className="panel-content">{children}</div>}
    </div>
  );
}
```

---

## 6. Props Drilling & Context API

- What I Add

- as the data is needed to be handle properly just like the oil we need to transport it properly from one place to another place.(as from parent to their child using the props)

- Prpos Drilling:- Passing the props from parent to children to their children then to thier till the level where it is required.
- We should avoid to use very nested prop drilling as the parent that is passing the data do not even require it and we are passing it unneccesarily to them.we must avoid it.
- To solve we use react context:- It is a hook that help to access the data that is required in different components or the pages of the application.
- We can create a file with global(not actually just a abbreviation) data and store that data inside a variable like **const UserContext = createContext({loggedInUser : "Default User"})**
then export it.
- We can acces this info in the variable in any file or component using the **useContext Hook** of react.
- You can make multiple context.
- They are not the global data, it is just a data that is needed in multiple components and we use this method to avoid the prop drilling.
- With new function based component we can access this using the useContext hook but in the Class Based Component we can access this like first import UserContext in that file then in return html inside the div or which tag you want the data.In that use UserContext as a component like the code below.

```js

import UserContext from "./Utils/UserContext";

...inside

<UserContext.Consumer>{(loggedInUser) => (
    <h1>{loggedInUser}<h1/>
)}</UserContext.Consumer>

```

- suppose we have to set the default user as the user that is currently logged in and that name is coming from the authentication check of the username and their password , login api response or any other source.
- Then what we have to do is just create a **UserContext** file in the utils folder and export it.
- Then in the **App.jsx** file we have to wrap the entire application with the **UserContext.Provider** and pass the loggedInUser data to it.
- Then in any file or component we can access this info in the variable in any file or component using the **useContext Hook** of react.
- you can wrap the required component only inside the **Provider** instead of wrapping the entire application.
- If you wrap the whole app inside **Provider** with different data and wrap any component inside **Provider** with different data then the inner **Provider** will be given priority.
- You can use multiple **Provider** in the same application.
- And the component outside these wraps will have the default value passed to it.
- But you can change the default value as you wish.

```js
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./Utils/UserContext";

function App() {

  const [userName, setUserName] = useState();

  useEffect(() => {
    // make an api call and send username and password for auth and if valid then set the name as the username and log in the user.
    const fetchUserData = async () => {
      const data = {
        name: "Osheen Jain"
      }
      setUserName(data.name);
    }
    fetchUserData();
  }, [])

  return (
    // outer components will have the default value
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        {/* inner components will have the value provided by the inner components 
        if it is not provided then it will go to the outer components and get the value from there
        */}
        <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          <Header />{/* here it will have the default Elon Musk as loggedInUser */}
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  )
}

export default App;
```

## A good one

Few levels + local relationship
        ↓
      Props

Several levels in same tree
        ↓
      Context

Large application + complex shared client state
        ↓
 Redux Toolkit / Zustand

Server/API data
        ↓
 TanStack Query

Can avoid passing data entirely through composition
        ↓
   Composition

## How to update the context value with on the go input change data

- As we are setting the UserName in the app.jsx using set function we just have to pass the setUserName function also to the context value.so that we can update the context value from any component.
- like taking an input in input box and then update the value in set function ass e.target.value.
- done in body.jsx of RestaurantSearch.jsx
- Even in the Grocery.jsx by lazy loading when you start loading it the component will have the value of the outer provider i.e the default value i.e. the loggedInUser as "Osheen Jain" but when you update it in the RestaurantSearch.jsx the Grocery.jsx will automatically get updated with the new value.This is the power of Context API even with lazy loading.

- What You Will Add
- Concept (react.dev):
- Props Drilling:- The problem of passing props through multiple intermediary components that don't need the data themselves, solely to deliver it to a deeply nested child.
- Context API:- Lets a parent component provide data to the entire tree below it without passing props through every intermediate component.
- Core APIs:-
  1. `createContext()`: Defines the context object.
  2. `<Context.Provider value={...}>`: Supplies value to all child components.
  3. `useContext(Context)`: Hook for any child component to consume the value directly.

- Search Keywords:- `Passing data deeply with context react.dev`, `React useContext hook`, `Props drilling vs Context API`.

- Example

```jsx
import { createContext, useContext, useState } from "react";

// 1. Create Context
export const UserContext = createContext({
  loggedInUser: "Guest",
});

// 2. Provide Context at parent level
export function App() {
  const [userName, setUserName] = useState("Osheen Jain");

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <Header />
      <Body />
    </UserContext.Provider>
  );
}

// 3. Consume Context deeply in any child component
function UserProfileBadge() {
  const { loggedInUser } = useContext(UserContext);

  return <span className="font-semibold">User: {loggedInUser}</span>;
}
```

---

## Quick Reference Summary

| Concept | What It Solves | react.dev Best Practice |
| :--- | :--- | :--- |
| **Data Layer vs UI Layer** | Separates state/logic from presentation | Keep state minimal; compute values during rendering. |
| **HOC** | Reuses UI decorators across components | Use Custom Hooks for shared logic; HOC for visual wrapping. |
| **Controlled vs Uncontrolled** | Clarifies who owns the state | Use controlled when siblings need to be coordinated. |
| **Lifting State Up** | Coordinates state between sibling components | Lift to closest common parent; pass state and callbacks down. |
| **Accordion Pattern** | Collapsible menu items with coordinated toggle | Store active index in parent; pass `isOpen` and `onToggle` to items. |
| **React Context** | Eliminates tedious props drilling | Use for global data (theme, auth, preferences), not for local state. |
