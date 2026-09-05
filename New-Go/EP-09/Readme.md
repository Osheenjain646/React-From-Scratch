<!-- markdownlint-disable MD046 -->
<!-- markdownlint-disable MD0022 -->
<!-- markdownlint-disable MD003 -->

# Custom Hooks

-used to make code more readable , reusable and modular.
-hook's name can anything but it must start with "use" keyword.

1** Like in RestuarantMenu file we are fetching the menu of a particular resturant using the useEffect hook with an API call and changing that for changing resId.But we can do the same in custom hook file by passing the changing resId as a parameter in the custom hook and no need to add the resId in useEffect hook dependency array again in custom hook.
In custom hook we do the same but in a modular way of fetching the data using the react hooks.

2** Adding the Online status check for our app as the user is online or not.We can do this by using the window object's Event Listener as "online".

3** As a bundler use to bundle all your files in js file to handle ut down to the browser for woking.
But the only one large js file can make our application slower to run.
You have to make small bundles of these file not a big one and also not to load all components as a single bundle(file) in browser.
so the process of doing this is called as chunking/code splitting/dynamic bundling/lazy loading/on-demand loading/dynamic import.
So if we can make our app to load data or components in chunks we can make the use of lazy by react and make a dynamic import in it to load the component when required only as user request for it.
And we can use it to load when a button clicked and we can re-route and make a new route or path of website when requested the required component like grocery will load.
So in browserRouter we use Suspense (likely a component) and grocery component inside it and providde a fallback to Suspense to make react load something until the grocery component is not fetched out and give fallback a UI or component to until that.

*** This is ultimately making your app load very fast.

*** We do this especially when we our app is Bloating means the bundle size is increasing.

4** New thing learned as main.jsx in vite app is only used for mounting the createRoot.So make the route config in Your app.jsx file for not recieving the fast refresh errors by eslint.

## gpt chat

Absolutely. These terms are closely related, which is why they are confusing at first. The easiest way to learn them is to understand the problem first, then see how each technique solves a different part of it.

🚀 Lazy Loading, Dynamic Import, Code Splitting, Chunking & On-Demand Loading

Imagine your React application has:

Home
Products
Cart
Profile
Admin Dashboard
Analytics
Settings

If your application sends all the JavaScript for all these pages to the browser immediately, the initial download can become large.

For example:

User opens Home

Browser downloads:

Home.js          50 KB
Products.js      100 KB
Cart.js          70 KB
Profile.js       80 KB
Admin.js         300 KB
Analytics.js     250 KB
Settings.js      100 KB
-------------------------

Total            950 KB

But the user may only visit:

Home

Why download almost 1 MB of JavaScript that isn't needed yet?

That's the problem these concepts address.

1. 🧩 What is Bundling?

Before understanding code splitting, understand bundling.

Your project might have:

src/
├── App.jsx
├── Header.jsx
├── Home.jsx
├── Product.jsx
├── Cart.jsx
└── Profile.jsx

Your browser doesn't simply receive all these source files exactly as they are.

A build tool such as Vite/Rollup processes your application and produces optimized files that the browser can download.

Conceptually:

Many source files
       ↓
   Build tool
       ↓
    Bundle
       ↓
JavaScript files
       ↓
   Browser

A bundle is basically a packaged collection of code that can be delivered to the browser.

2.🧩 The Problem With One Huge Bundle

Suppose everything ends up in:

index.js
index.js
│
├── Home
├── Products
├── Cart
├── Profile
├── Admin
├── Analytics
└── Settings

User visits:

/

But the browser potentially has to download code for:

Admin
Analytics
Settings

even though the user hasn't visited them.

This is where code splitting comes in.

3.✂️ What is Code Splitting?

Code splitting means dividing your application's JavaScript into multiple smaller bundles/chunks instead of delivering one huge bundle.

Instead of:

                    app.js
                      │
       ┌──────────────┼──────────────┐
       ↓              ↓              ↓
     Home           Admin          Profile

you can have:

main.js
   │
   └── Home

admin.chunk.js
   │
   └── Admin

profile.chunk.js
   │
   └── Profile

Now the browser can download only the code it currently needs.

4.📦 What is Chunking?

Chunking is the practical result of splitting your application into separate pieces.

For example, the build system might generate:

assets/
├── index-abc123.js
├── Product-def456.js
├── Admin-ghi789.js
└── Profile-jkl012.js

These individual JavaScript files are commonly called chunks.

So:

Code Splitting
      ↓
Application divided into pieces
      ↓
Chunks generated
Simple relationship

Code splitting is the strategy; chunks are the resulting pieces.

5.⚡ What is Dynamic Import?

This is where JavaScript becomes really interesting.

Normally:

```js
import Admin from "./Admin";
```

is a static import.

It tells the bundler:

"I need this module as part of the application's normal dependency graph."

But JavaScript also supports:

```js
import("./Admin");
```

This is a dynamic import.

Notice the parentheses:

```js
import("./Admin")
```

It returns a Promise.

Conceptually:

import("./Admin")
       ↓
     Promise
       ↓
Browser loads Admin chunk
       ↓
Module becomes available
6. 🔥 Dynamic Import Example

Suppose:

src/
├── App.jsx
└── Admin.jsx

Instead of:

```js
import Admin from "./Admin";

function App() {
    return <Admin />;
}
```

you can dynamically import it:

```js
function App() {

    async function openAdmin() {
        const module = await import("./Admin");

        console.log(module);
    }

    return (
        <button onClick={openAdmin}>
            Open Admin
        </button>
    );
}
```

The important part:

```js
await import("./Admin");
```

The Admin module can be loaded when it is needed.

7.🚀 What is Lazy Loading?

Now we reach the important term.

Lazy loading means delaying the loading of something until it is actually needed.

Instead of:

Application starts
       ↓
Load everything
       ↓
Then use it

we do:

Application starts
       ↓
Load only what's needed
       ↓
User requests something
       ↓
Load it
       ↓
Use it
8. React Lazy Loading

React provides:

```js
lazy()
```

from React.

Example:

```js
import { lazy, Suspense } from "react";

const Admin = lazy(() => import("./Admin"));
```

Notice:

```js
import("./Admin")
```

This is a dynamic import.

And:

lazy(...)

tells React to treat that dynamically imported component as a lazy-loaded component.

9.Complete React Example
Admin.jsx

```js
const Admin = () => {
    return (
        <h1>
            Admin Dashboard
        </h1>
    );
};

export default Admin;
```

App.jsx

```js
import { lazy, Suspense } from "react";

const Admin = lazy(() => import("./Admin"));

function App() {
    return (
        <div>

            <h1>Home Page</h1>

            <Suspense fallback={<h2>Loading Admin...</h2>}>
                <Admin />
            </Suspense>

        </div>
    );
}

export default App;
```

10.Why Do We Need Suspense?

This part is extremely important.

When React encounters:

```js
<Admin />
```

the Admin component might not be available yet.

It needs to:

Request Admin chunk
       ↓
Download it
       ↓
Evaluate it
       ↓
Render Admin

During that time, React needs something to display.

That's what:

```js
<Suspense fallback={<h2>Loading Admin...</h2>}>
```

provides.

So:

Admin loading
     ↓
"Loading Admin..."
     ↓
Admin downloaded
     ↓
Admin displayed

11.🔥 Lazy Loading + Code Splitting Together

This is the important relationship:

```js
const Admin = lazy(() => import("./Admin"));
```

Dynamic import

import("./Admin")

↓

Code splitting

Build tool can separate Admin into its own chunk.

↓

Lazy loading

React doesn't load that component until it is needed.

12.On-Demand Loading

On-demand loading means:

Load a resource when the application actually needs it rather than loading it upfront.

For example:

User opens website
       ↓
Home loaded

User clicks "Admin"
       ↓
Admin chunk requested

User clicks "Analytics"
       ↓
Analytics chunk requested

This is on-demand loading.

13.Real React Router Example

This is where you'll commonly use it in real applications.

Suppose you have:

/
 /products
 /cart
 /admin
 /profile

You don't necessarily want every page's JavaScript loaded immediately.

With React Router:

```js
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const Admin = lazy(() => import("./pages/Admin"));
```

Then:

This is also a way to do this and also can do this in routes configurations.

```js
<Suspense fallback={<h1>Loading...</h1>}>

    <Routes>

        <Route path="/" element={<Home />} />

        <Route
            path="/products"
            element={<Products />}
        />

        <Route
            path="/cart"
            element={<Cart />}
        />

        <Route
            path="/admin"
            element={<Admin />}
        />

    </Routes>

</Suspense>
```

Now conceptually:

Initial load
    ↓
Home chunk

User → /products
    ↓
Products chunk

User → /admin
    ↓
Admin chunk

14.🧠 The Complete Picture

This is the part I recommend memorizing:

                 Your React Application
                          │
                          ↓
                    Build Process
                          │
                          ↓
                  Code Splitting
                          │
             ┌────────────┼────────────┐
             ↓            ↓            ↓
          Home.js      Admin.js    Product.js
             │            │            │
           Chunk        Chunk        Chunk
             │            │            │
             └────────────┼────────────┘
                          ↓
                    Browser requests
                       when needed

15.🔥 Difference Between All Terms

This table is the most important part.

Concept                                Meaning
Bundling           Combining/processing modules into files for delivery
Code Splitting     Dividing application code into separate bundles/chunks
Chunk              One of those generated pieces/files
Dynamic Import     import() that loads a module asynchronously
Lazy Loading       Delaying loading until needed
On-Demand Loading  Loading a resource when the user/application requests it

16.Dynamic Import vs Lazy Loading

These are not exactly the same thing.

Dynamic import

JavaScript feature:

```js
import("./Admin");
```

It loads a module dynamically and returns a Promise.

React lazy

React API:

```js
lazy(() => import("./Admin"));
```

It uses dynamic import to lazy-load a React component.

So:

Dynamic Import
      ↓
JavaScript mechanism

React.lazy
      ↓
React mechanism built around lazy component loading

17.Lazy Loading Isn't Only For Components

You can lazy-load other things too.

For example, suppose you have a large library:

```js
async function generateReport() {

    const module = await import("./reportGenerator");

    module.generate();
}
```

The report generator isn't necessarily loaded when the application starts.

It's loaded when:

generateReport();

is called.

This can be useful for:

large libraries
PDF generation
charts
editors
admin functionality
rarely used features

18.Example: Large Chart Library

Imagine your dashboard has a chart feature.

Without lazy loading:

Application starts
       ↓
Download chart library
       ↓
Download dashboard
       ↓
Download everything

But the user might never open the chart.

With dynamic import:

```js
async function showChart() {

    const { createChart } =
        await import("./chartLibrary");

    createChart();
}
```

Now:

Application starts
       ↓
No chart library
       ↓
User clicks "Show Chart"
       ↓
import()
       ↓
Chart library downloaded
       ↓
Chart displayed

That's on-demand loading.

19.⚠️ Important: Lazy Loading Has a Trade-off

Lazy loading isn't automatically better everywhere.

Suppose your Home page is extremely important.

If you lazy-load it:

User opens website
       ↓
Wait
       ↓
Request Home.js
       ↓
Download
       ↓
Render

You've added another loading step.

So you generally want to lazy-load things that are:

large
rarely used
behind a route
behind a user interaction
not needed for the initial screen

20.🎯 Best Real-World Example

Consider an e-commerce application:

Home
Products
Product Details
Cart
Checkout
Admin Dashboard
Analytics

A sensible strategy might be:

Initial Load
    ↓
Home
Core UI
Navbar
Authentication state

Then:

Products clicked
       ↓
Products chunk
Product clicked
       ↓
Product Details chunk
Admin clicked
       ↓
Admin chunk
Analytics clicked
       ↓
Analytics chunk

This reduces the amount of JavaScript required during the initial load.

🧠 How to Learn This Properly

Don't memorize the five definitions separately.

Learn them as one story:

Step 1 — Bundling

"My application has lots of files. How does the browser receive them?"

↓

Bundling

Step 2 — Problem

"Why should the user download code they aren't using?"

↓

Code splitting

Step 3 — Result

"What do the separated pieces look like?"

↓

Chunks

Step 4 — Mechanism

"How can JavaScript load a piece later?"

↓

Dynamic import

import("./Admin")

Step 5 — React

"How do I lazy-load a React component?"

↓

React.lazy()

lazy(() => import("./Admin"))

Step 6 — Loading UI

"What do I show while it's loading?"

↓

Suspense

```js
<Suspense fallback={<Loading />}>
    <Admin />
</Suspense>
```

🔥 One Mental Model to Remember
                CODE SPLITTING
                     ↓
          Application divided into
                 CHUNKS
                     ↓
             Dynamic import()
                     ↓
          Chunk loaded when needed
                     ↓
              LAZY LOADING
                     ↓
           ON-DEMAND LOADING

They are related concepts, but not synonyms.

🎤 Interview Questions

1.What is code splitting?

Code splitting divides an application's JavaScript into smaller chunks so that the browser doesn't have to download all application code upfront.

2.What is lazy loading?

Lazy loading delays loading a resource until it is actually needed.

3.What is dynamic import?
import("./module");

It dynamically loads a module and returns a Promise.

4.What is a chunk?

A chunk is a separate piece of JavaScript generated by the build process, often as a result of code splitting.

5.How do you lazy-load a React component?
const Admin = lazy(() => import("./Admin"));
6.Why do we use Suspense?

```js
<Suspense fallback={<Loading />}>
    <Admin />
</Suspense>
```

It provides a fallback UI while a lazy component is waiting for its code to load.

7.Is dynamic import the same as lazy loading?

No.

Dynamic import is the mechanism for asynchronously loading a module. Lazy loading is the strategy of delaying that loading until needed.

🧪 Small Assignment

Build a React application with:

Home
About
Products
Admin
Requirements
Load Home normally.
Lazy-load Admin.
Use Suspense.
Open DevTools → Network.
Reload the application.
Notice which JS files load initially.
Navigate to Admin.
Observe the additional JS request.

Then try:

```js
const Admin = lazy(() => import("./Admin"));
```

and compare it with:

```js
import Admin from "./Admin";
```

That Network-tab experiment will make code splitting and lazy loading much easier to understand than simply memorizing definitions.

🏆 Final Cheat Sheet
Bundling
→ Package application code for browser delivery.

Code Splitting
→ Divide code into separately loadable pieces.

Chunk
→ One generated piece of that split code.

Dynamic Import
→ import("./file") loads a module asynchronously.

Lazy Loading
→ Don't load something until it is needed.

On-Demand Loading
→ Load it when the application/user requests it.

React.lazy
→ React's API for lazy-loading components.

Suspense
→ Shows fallback UI while lazy content is loading.

The most important code to remember is:

```js
import { lazy, Suspense } from "react";

const Admin = lazy(() => import("./Admin"));

function App() {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Admin />
        </Suspense>
    );
}
```

That small example connects dynamic import → code splitting → chunks → lazy loading → on-demand loading → Suspense all together.
