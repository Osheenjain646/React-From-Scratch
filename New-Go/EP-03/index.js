import React from "react";
import ReactDOM from "react-dom/client";

// React functional component
// Always capital case the first letter of container name

const HeadingComponent2 = () => <h1>Hi from functional component</h1>;

// component composition
const HeadingComponent = () => (
  <div id="container">
    <HeadingComponent2 />
    <h1 className="heading">Hi from functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />); // return like it for component
