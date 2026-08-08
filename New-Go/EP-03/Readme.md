# Ep-03

1**start is a reserve keyword by npm do npm run start or npm start is same just add the script for start in package.json to what to do when the command is run.
2** JSX:- it is a html like syntax or xml like syntax

```js
const jsxheading = <h1 id="heading">Hi from jsx</h1>; // single line
// multiple line
const jsxheading1 = <h1 id="heading1">Hi from jsx 1</h1>;
```

This jsx code is transpiled by parcel by the help of babel and then goes to browser as a understandable js code for browser

jsx is transpiled into reactElement as a js object by babel then to html element by browser

3\*\* camelCase syntax for attributes in jsx elements

4\*\* React Components:-

1. Class based component
2. Functional based component

\*\* Functional component:-

-- a js function that return a react element

```js
// This is known as component composition
const HeadingComponent = () => (
  <>
    {HeadingComponent2()}
    <HeadingComponent2></HeadingComponent2>
    <HeadingComponent2 />
    <h1 className="heading">Hi from functional component</h1>
  </>
);
```

5\*\* You can write js in html element inside the jsx code in the curly braces
you can also add react element into it using the {}

```js
const number = 10000;
const Heading = () => (
  <div id="container">
    {number}
    <h1 id="heading"> Hi am here</h1>
  </div>
);
```

6** Get info about cross side scripting
