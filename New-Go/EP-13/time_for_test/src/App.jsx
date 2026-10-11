import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import ReduxStore from "./Utils/ReduxStore";



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
    <Provider store={ReduxStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName: setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

export default App;