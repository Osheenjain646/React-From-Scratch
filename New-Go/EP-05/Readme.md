# EP-05 Notes

** Reconcilation Algorithm (React Fiber) (React 16):
It is an algo that helps react to update the UI efficiently.
It uses a Virtual DOM to compare the changes between the real DOM and the updated Virtual DOM and then updates the real DOM only for the changes.
Basically a new VDOM and OLD VDOM.
New VDOM holds the current state and old VDOM holds the previous state.
It uses the both VDOM and Diiffing Algorithm to update the real DOM.
Reconcilation Algo is the main Algorithm that helps React to update the UI efficiently.

** Virtual DOM: It is a lightweight copy of the real DOM. It is used to store the changes that need to be made to the real DOM.
It is also nothing but a Javascript Object. If the state changes, a new VDOM is created and compared with the old VDOM.
The changes are then updated to the real DOM accordingly.

** Diffing Algorithm: It is an algo that helps react to find the differences between the new VDOM and the old VDOM.
t is a recursive algo that compares the new VDOM with the old VDOM and then updates the real DOM only for the changes.
If the state changes, a new VDOM is created and compared with the old VDOM.
The changes are then updated to the real DOM accordingly by making the batches of it and re-render again by the reconcile Algo.

## React Hooks (Complete Guide)

> **State variable** — A super-powerful
> JavaScript variable with the powers of React.
> Whenever it is updated, the component
> **re-renders**. These special functions are
> known as **React Hooks**.

---

## What Are React Hooks?

React Hooks are **plain JavaScript utility
functions** provided by React that let you
**"hook into"** React's state management and
lifecycle features **directly from function
components** — no class components needed.

### Rules of Hooks

1. **Only call hooks at the top level** —
   never inside loops, conditions, or nested
   functions.
2. **Only call hooks from React function
   components** or from custom hooks — never
   from regular JS functions.

---

## 1. `useState` Hook

### What `useState` Does

`useState` lets you **add state** to a
functional component. It returns an array
with two elements:

| Index | Name                | Purpose                    |
|-------|---------------------|----------------------------|
| `[0]` | **State value**     | Current value of the state |
| `[1]` | **Setter function** | Updates state, re-renders  |

### `useState` Key Points

- Calling the setter function **re-renders**
  the component with the new value.
- The initial value is only used on the
  **first render**.
- You can use **multiple** `useState` calls
  in one component for different state.
- For updates based on previous state, pass
  a **callback** to the setter:
  `setState(prev => prev + 1)`.

### `useState` Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
```

---

## 2. `useEffect` Hook

### What `useEffect` Does

It is used to do something after the component renders itself on the DOM.Then itt call the callBack function given by us in the useEffect Hook.

`useEffect` lets you perform **side effects**
in function components — things like data
fetching, subscriptions, timers, or manually
changing the DOM. It replaces the class
lifecycle methods `componentDidMount`,
`componentDidUpdate`, and
`componentWillUnmount`.

### Dependency Array Behavior

| Dependency Array    | When Effect Runs              |
|---------------------|-------------------------------|
| Not provided        | After **every** render        |
| Empty `[]`          | **Once** on mount             |
| With values `[a,b]` | On mount + when values change |

### `useEffect` Key Points

- The **cleanup function** (returned from
  the effect) runs before the component
  unmounts and before the effect re-runs.
- Effects run **after** the render is painted
  to the screen, so they don't block the UI.
- Always include all variables used inside
  the effect in the dependency array to
  avoid stale closures.

### `useEffect` Example

```jsx
import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty array = runs once on mount

  return <h2>Timer: {seconds}s</h2>;
}

export default Timer;
```

---

## 3. `useContext` Hook

### What `useContext` Does

`useContext` lets you **consume** a React
Context value without wrapping your component
in a `<Context.Consumer>`. It solves the
**prop-drilling** problem — passing data
through many intermediate components just to
reach a deeply nested child.

### How It Works

1. **Create** a context with
   `React.createContext(defaultValue)`.
2. **Provide** a value with
   `<MyContext.Provider value={...}>`.
3. **Consume** the value in any child
   component with `useContext(MyContext)`.

### `useContext` Key Points

- Any component calling
  `useContext(MyContext)` will **re-render**
  whenever the Provider's `value` changes.
- The `defaultValue` in `createContext` is
  only used when there is **no matching
  Provider** above the component in the tree.
- Great for global data like **themes, auth
  state, or locale/language**.

### `useContext` Example

```jsx
import {
  createContext, useContext, useState
} from "react";

const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
      <button onClick={() => setTheme(
        theme === "light" ? "dark" : "light"
      )}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === "dark"
        ? "#333" : "#fff",
      color: theme === "dark"
        ? "#fff" : "#000",
      padding: "20px",
    }}>
      <h2>Current Theme: {theme}</h2>
    </div>
  );
}

export default App;
```

---

## 4. `useReducer` Hook

### What `useReducer` Does

`useReducer` is an alternative to `useState`
for managing **complex state logic**. It works
like a mini Redux — you dispatch **actions**,
and a **reducer function** determines how the
state should change.

### `useReducer` Syntax

```js
const [state, dispatch] = useReducer(
  reducerFunction,
  initialState
);
```

### When to Use `useReducer` over `useState`

| Use `useState`       | Use `useReducer`              |
|----------------------|-------------------------------|
| Simple, independent  | Multiple sub-values           |
| One or two variables | Depends on previous state     |
| Simple updates       | Complex logic or many actions |

### `useReducer` Key Points

- The **reducer** is a pure function:
  `(currentState, action) => newState`.
- `dispatch` is **stable** across renders —
  safe to pass to child components.
- Great for form state, toggles, counters
  with multiple operations, or any state
  machine.

### `useReducer` Example

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      throw new Error(
        "Unknown action: " + action.type
      );
  }
}

function Counter() {
  const [state, dispatch] = useReducer(
    reducer, { count: 0 }
  );

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch(
        { type: "INCREMENT" }
      )}>+1</button>
      <button onClick={() => dispatch(
        { type: "DECREMENT" }
      )}>-1</button>
      <button onClick={() => dispatch(
        { type: "RESET" }
      )}>Reset</button>
    </div>
  );
}

export default Counter;
```

---

## 5. `useCallback` Hook

### What `useCallback` Does

`useCallback` returns a **memoized version**
of a callback function. The function reference
stays the **same** between renders unless one
of its dependencies changes. This prevents
unnecessary re-renders of child components
that receive the function as a prop.

### `useCallback` Syntax

```js
const memoizedFn = useCallback(() => {
  // do something
}, [dependencies]);
```

### `useCallback` Key Points

- Without `useCallback`, a new function is
  created on **every render**, causing child
  components wrapped in `React.memo` to
  re-render unnecessarily.
- Only useful as a **performance
  optimization** — don't wrap every function;
  use it when passing callbacks to memoized
  child components.
- The function is only recreated when a
  **dependency** changes.

### `useCallback` Example

```jsx
import {
  useState, useCallback, memo
} from "react";

const ExpensiveChild = memo(({ onAdd }) => {
  console.log("ExpensiveChild rendered");
  return (
    <button onClick={onAdd}>Add Item</button>
  );
});

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const handleAdd = useCallback(() => {
    setItems(prev => [
      ...prev,
      `Item ${prev.length + 1}`
    ]);
  }, []);

  return (
    <div>
      <h2>
        Items: {items.length} | Count: {count}
      </h2>
      <ExpensiveChild onAdd={handleAdd} />
      <button onClick={() => setCount(c => c + 1)}>
        Increment Count
      </button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
```

---

## 6. `useMemo` Hook

### What `useMemo` Does

`useMemo` returns a **memoized value**. It
only recalculates the value when one of its
dependencies changes, avoiding expensive
computations on every render.

### `useMemo` Syntax

```js
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b]
);
```

### `useMemo` vs `useCallback`

| Hook          | Memoizes             | Returns         |
|---------------|----------------------|-----------------|
| `useMemo`     | A **computed value** | Computed result |
| `useCallback` | A **function ref**   | The function    |

> `useCallback(fn, deps)` is equivalent to
> `useMemo(() => fn, deps)`.

### `useMemo` Key Points

- Use for **expensive calculations** —
  filtering large lists, heavy math, complex
  object transformations.
- React may **discard** cached values (e.g.,
  off-screen components), so don't rely on
  it for correctness — only for performance.
- Don't overuse; memoization itself has a
  cost. Profile first.

### `useMemo` Example

```jsx
import { useState, useMemo } from "react";

function FilteredList() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("light");

  const allItems = [
    "Apple", "Banana", "Cherry",
    "Date", "Elderberry", "Fig", "Grape"
  ];

  // Only recalculates when query changes
  const filteredItems = useMemo(() => {
    console.log("Filtering...");
    return allItems.filter(item =>
      item.toLowerCase().includes(
        query.toLowerCase()
      )
    );
  }, [query]);

  const style = {
    background: theme === "dark"
      ? "#333" : "#fff",
    color: theme === "dark"
      ? "#fff" : "#000",
    padding: "20px"
  };

  return (
    <div style={style}>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search fruits..."
      />
      <button onClick={() => setTheme(
        t => t === "light" ? "dark" : "light"
      )}>
        Toggle Theme
      </button>
      <ul>
        {filteredItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
```

---

## 7. `useRef` Hook

### What `useRef` Does

`useRef` returns a **mutable ref object**
(`{ current: value }`) that persists across
renders. Unlike state, updating a ref
**does NOT trigger a re-render**.

### Two Main Use Cases

| Use Case          | Description                      |
|-------------------|----------------------------------|
| **DOM Access**    | Use `ref={myRef}` on elements    |
| **Mutable Value** | Persist values without re-render |

### `useRef` Key Points

- `useRef(initialValue)` creates
  `{ current: initialValue }` on the first
  render and returns the **same object** on
  every subsequent render.
- Changing `.current` does **not** cause a
  re-render — this is the key difference
  from `useState`.
- Common uses: focusing an input, storing
  interval/timeout IDs, keeping track of
  previous props/state.

### `useRef` Example

```jsx
import { useRef, useEffect } from "react";

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Auto-Focus Input</h2>
      <input
        ref={inputRef}
        placeholder="I'm focused on mount!"
      />
    </div>
  );
}

export default AutoFocusInput;
```

---

## Quick Reference Cheat Sheet

| Hook          | Purpose                    | Re-render? |
|---------------|----------------------------|------------|
| `useState`    | Add state to component     | Yes        |
| `useEffect`   | Side effects and cleanup   | No         |
| `useContext`  | Context without drilling   | Yes        |
| `useReducer`  | Complex state with actions | Yes        |
| `useCallback` | Memoize function ref       | No         |
| `useMemo`     | Memoize computed value     | No         |
| `useRef`      | Persist mutable values     | No         |

---

> **Remember:** Hooks are just **JavaScript
> functions** with special rules. Master these
> 7 hooks and you can build virtually any
> React application!
