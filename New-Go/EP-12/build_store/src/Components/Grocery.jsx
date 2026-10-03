import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Grocery = () => {

    const userInfo = useContext(UserContext);
    const { loggedInUser } = userInfo;

    return (
        <div className="grocery-component">
            <h3>Online grocery store</h3>
            <h3>Login as : {loggedInUser}</h3>
        </div>
    )
}

export default Grocery;