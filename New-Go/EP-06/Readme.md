# Explorign the World

## Two approaches to fetch data from api call

1** When the page loads , we can make the api call , wait for data to come then render the data.

2** As soon as the page loads we will render the UI and after that we will make the api call and as soon as we get the data we will re-render the UI based on the new data comes.
We will always use the 2 appraoch in react it makes the UX(user Experience) more better as we can make to see something when the data is loading.
We don't have to make a wait for api to fetch the data and show the lagging UI to the user.
