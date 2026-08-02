// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" }, // all three are nothing but props(info send by parent to child to fetch the data defined at parent)
//   "Hello world from react!",
// ); // react element a js object => HTML(for browser understanding)
// // type of element , attributes(class , id , function etc) , content inside the element

// console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// nested structure

// const parent = React.createElement(
//   "div",
//   {
//     id: "parent",
//   },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement(
//       "h1",
//       {
//         id: "heading1",
//       },
//       "Nested Structure",
//     ),
//   ),
// );

// root.render(parent);

// for multiple content in the third arg like two different heading pass it in a array
// to avoid that ugly structure we use the jsx

const parent2 = React.createElement("div", { id: parent2 }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "hi h1 tag from child1"),
    React.createElement("h2", {}, "hi h2 tag from child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hi h1 tag from child2"),
    React.createElement("h2", {}, "hi h2 tag from child2"),
  ]),
]);

root.render(parent2);
// **** if any content is already present in the root div will be replaced by the element we are rendering
