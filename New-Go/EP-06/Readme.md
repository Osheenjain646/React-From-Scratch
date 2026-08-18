# Explorign the World

## Two approaches to fetch data from api call

1** When the page loads , we can make the api call , wait for data to come then render the data.

2** As soon as the page loads we will render the UI and after that we will make the api call and as soon as we get the data we will re-render the UI based on the new data comes.
We will always use the 2 appraoch in react it makes the UX(user Experience) more better as we can make to see something when the data is loading.
We don't have to make a wait for api to fetch the data and show the lagging UI to the user.

3**
Until the page loads make a habit of showing the shimmer UI to the user it makes the user experience more better than the normal empty UI.

4** Whenever you call a fn from a useState it re-renders the whole component again in which that state varible is used and the as the variable is assigned as const it can't be updated but as the setComponentName is called the react re-render the component and make the state varible again with a new value that's why it is a new state varibale and const is not even changed.

5**
When you use a state variable and bind it's value to the value of the input box you can't change it as it becomes a controlled component.
To update it you have to use a OnChangeHandler and inside it a callback fn with a parameter as e and use the set Function of the useState variable to the change the value as passing the e.target.value to get the typed data and update the variable with it.
