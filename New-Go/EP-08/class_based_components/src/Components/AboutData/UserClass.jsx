import React from "react";
import { github_User_URL, userName } from "../../Utils/API_KEYS";
import { Link } from "react-router-dom";
class UserClass extends React.Component {

    constructor() {
        console.log("Child Constructor");

        super();

        this.state = {
            userInfo: {},
        }
    }

    async componentDidMount() {
        console.log(" Child Component did mount");
        // api call here 
        const data = await fetch(github_User_URL + userName);
        const jsonData = await data.json();
        console.log(jsonData);
        this.setState({
            userInfo: jsonData,
        })
    }

    componentDidUpdate() {
        console.log("Child Component did update");
    }

    componentWillUnmount() {
        console.log("Child Component will unmount");
    }

    render() {
        console.log("Child render");

        const { name, bio, location, followers, following, html_url } = this.state.userInfo;

        return (
            <div className="user-component">
                <div className="user-card">
                    <h3 className="user-name">Name: {name}</h3>
                    <p className="user-bio">Bio: {bio}</p>
                    <p className="user-location">Location: {location}</p>
                    <p className="user-followers">Followers: {followers}</p>
                    <p className="user-following">Following: {following}</p>
                    <p className="user-profile-url">Profile URL: {<Link to={html_url}>{html_url}</Link>}</p>
                </div>
            </div>
        )
    }
}

export default UserClass;