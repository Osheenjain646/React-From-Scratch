# Notes for class based component episode

see the AboutData folder for understanding the class based components

## Syntax

```js
// class based component
import Recat from 'react';

class MyClass exteds React.Component{
    render(){
        return (
            // your jsx code or js code
        )
    }
}
export default MyClass;

```

## Import and export

import and export are the same as for functional component and use it as same as functional component where it is required.

## props in class based component

super(props) in JavaScript / React

What is super()?

When a class extends another class, super() calls the parent class constructor.

```js

class Parent {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Parent {
    constructor(name) {
        super(name); // calls Parent constructor
        this.age = 20;
    }
}
```

Why super(props) in React?

A React class component extends React.Component, so its constructor must call the parent constructor.

```js
class User extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return <h1>{this.props.name}</h1>;
    }
}
```

super(props) passes the props to React.Component.

What if we don't call super()?

Using this before super() causes:

ReferenceError:
Must call super constructor in derived class before accessing 'this'

```js
class Child extends Parent {
    constructor() {
        this.age = 20; // ❌ Error
        super();
    }
}
```

Key Points

extends → creates a child/derived class.

super() → calls the parent constructor.

this cannot be used before super().

super(props) → passes React props to React.Component.

Function components do not need super(props).

Interview Answer

super(props) calls the parent React.Component constructor and passes props to it. In a derived JavaScript class, super() must run before this can be used.

1** Whenevr you load a class based component in the app for the first time constructor is called and you are making an instance of the class and its render() gets executed.

## UseState in Class Based component

```js
// Inside constructor
class MyClass extends React.Component{
    constructor(props){
        super(props);
        // useState in class based component, this will contain all the state variable of the component in the form of object
        this.state = {
            count1: 0,
            count2: 0,
        };
    }
}

```

## for setState function

we use the following code below inside the onclick handler of the button

```js
this.setState({
    count1: this.state.count1 + 1, // -1 , 0 can use anything here
    // you can update the multiple state variables here and the variables you change will only be change if you have more state variables they will not get affected by this call and will not get re-rendered only the variable you changed will get re-rendered only
})
```

2** Whenever the instance of the class based component is created for the first time the constructor is called and its render() method is executed and displayed on the DOM, whenever the state of the class based component is changed or updated the render() method is called again only.

## Life Cycle of the class based component rendering process

Parent Constructor
Parent render
Child Constructor
Child render
Child Component did mount
Parent Component did mount

3** We use ComponentDidMount function as to do the works that has to be done once the component is mounted or rendered successfully on the DOM. As use of this we can make api calls inside it as it is call after the first render of the component.(The MicroService Architecture is a type of architecture that is used to build software applications in the form of a collection of small, independent services that can be deployed and scaled independently)
