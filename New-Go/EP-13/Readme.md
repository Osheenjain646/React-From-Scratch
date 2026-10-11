# EP-13 Notes

## Learning about how to build test cases to test our application against when building new features for our application

## Developer Testing

## What type of testing a developer can do

- **Manual Testing**

- It is a type of testing where a developer test every component is working as expected or not by manually opening the application and checking the each functionality of the application and ensuring that the new feature is working as expected and not breaking any existing functionality.
- It is very time consuming process.

- **Writing the test code**

- It is a type of testing where a developer write the test cases for the application and run them to check the functionality of the application.
- These are the automated testing.
- It is very fast process and can be run multiple times.
- It is very efficient process.
- It is very reliable process.
- These tests test our applicaation automatically.

## Types of testing that a developer can do

- **Unit Tetsing**

- It is a type of testing that is done in isolation.
- It tests the smallest unit of code.
- It does not test the dependencies.
- It is very fast process and can be run multiple times.
- It is very efficient process.
- It is very reliable process.
- It does not test the complete application.
- It only tests the specific unit of code.
- Like testing a single header component.

- **Integration Testing**

- It is a type of testing that is done to test the integration of multiple units of code.
- It tests the complete application.
- It is very slow process and can be run only once.
- It is very efficient process.
- It is very reliable process.
- It tests the complete application.
- It tests the integration of multiple units of code.
- Like testing the integration betwen the multiple components of the application.
- Like filter integration with the restaurant list , event handler integration with the component ,etc.

- **End to End Testing (E2E Testing)**

- Testing the entire flow of application from the user enter the applicationa until it leaves the application.
- Like when user opens the application , enters the location , searches for the restaurant , filters the restaurant , adds the restaurant to the cart , checks out , etc.
- It is very slow process and can be run only once.
- It is very efficient process.
- It is very reliable process.
- It tests the complete application.
- It is used to test the whole flow of the application for different scenarios or different paths of flow of application.
- It requires multiple tools like cypress , selenium or puppeteer etc.Used to test the major flow of the application.

**

- as a developer we are mostly concerned with unit testing and integration testing but we can see for the end to end testing too.

## Libraries for testing

- **React Testing Library**

- It is build on top of DOM testing library.
- It is based on jest as it use jest behind the scene (Jest is a delightful JavaScript Testing Framework with a focus on simplicity).
- and jest works with the frameworks like react , angular , vue etc with the help of jsdom which is a javascript implementation of the DOM API.

## Setting up the testing in our app steps:-

- **Installing react testing library**

- you have to install it with it's peer libraray as @testing-library/dom

```bash
npm install --save-dev @testing-library/react @testing-library/dom
```

<!-- - **Installing jest**

```bash
npm install --save-dev jest
```

- as jest do not have compatibility with the vite framework, so we will install the **vitest** as the replacement of the jest. -->

- **Installing vitest as the replacement of jest**

```bash
npm install --save-dev vitest
```

- **Installing jest-dom**

- it adds handy matchers like .toBeInTheDocument()

```bash
npm i --save-dev @testing-library/jest-dom
```

- **Installing jsdom**

- it adds jsdom which is a javascript implementation of the DOM API.
- simulattes a browser environment in node.js so react can render.

```bash
npm install --save-dev jsdom
```

- Now configure the vitest in vite.config.js.

```javascript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.jsx', // this file contains test configuration which will be loaded before every test.
  },
});
```

- create file setupTests.jsx in src folder and add the following code.

```javascript
import '@testing-library/jest-dom';
```

- Now add scripts to package.json to run the tests.

```js
"scripts": {
    "test": "vitest"
},
```

- Now add vitest in your eslint plugin file to ignore any lint errors for not importing methods from vitest as we have already set globals: true in vite.config.js file.

```js

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.vitest,
      },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])

```

- now run test using npm run test.

<!-- - If all run good and you are using jest as test runner then you have to create a Jest Configuration file.As you add test config in your vite.config.js file for vitest and it is not necessary to create a jest.config.js file.
- for jest config run

```bash
npx jest --init
```

- it will ask some question do as per requirement. -->

<!-- - Install @babel/preset-react  - to make jsx work for test cases if you are using babel as bundler and jest with it.And add presets in the babel.config.js file as ["@babel/preset-react", { runtime: "automatic" }]-->

- You can write multiple tests for one component in one file for that component lik for contact us page i am tesing to find out that wheather my heading is that component and also to find that wheather we have a button in that component also in just by writing in one file only.

- there are multiple method to get something from the rendered component and we can test it that it exist in it or not.Like:- getByRole , getByText , getBy(anyrole or something you wwant to check in the component or components).

- getBy will check wheather there is exactly one element for this role or something you want to check.And there is a getAllBy which will check that all the components of that role (like textbox(input box)) in that component are there or not if any there is any componenet is not present in that render component it will show you an error and fail the test.

- the gegtAllBy will return an array of all the element present in that render coponent of that role.

- if you do any console.log in this test it will return you a jsx element at the end as in the output and the jsx element is ultimately a reactElement which is nothing but an object.

- **Querying and assertion**:-

```js

    // Querying
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();

```

- you can expect that what not to be.

- You can group your test casees on the basis of their work in a single file for one component in **describe method** and you can write all your related test method in that particular describe part or method and the **test()** can also be written as **it()** in these describe method specially.

- You can have multiple describe in your one file too and you can also have nested describe and test in that too.

- for checking the particular text in a part of the text we can use regex inside it to check for it using **getByText(/particularText/i)** where i is for case insensitive.

- for checking a status of the part of the component after a particular action we use **fireEvent** from react testing library.

- doing for restuarant card having the props value to be passed for usage , you have to use the mockData object and pass it in the component as props to the test file by making a file for the mockData.json object data.

- Unit Testing in Unit Testing folder.

- Integrated Testing in Integrated Testing folder.

-
