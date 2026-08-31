import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        console.log("Child Constructor");

        super(props);

        this.state = {
            count1: 0,
        }
    }

    componentDidMount() {
        console.log(" Child Component did mount");
    }

    render() {
        console.log("Child render");

        const { name, location, role, coming } = this.props;
        const { count1 } = this.state;
        return (
            <div className="user-component">
                <div className="user-card">
                    <h1>Count1: {count1}</h1>
                    <div>
                        <button className="increament-btn" onClick={() => {
                            this.setState({
                                count1: this.state.count1 + 1
                            })
                        }}>Increament</button>
                        <button className="decreament-btn" onClick={() => {
                            this.setState({
                                count1: this.state.count1 - 1
                            })
                        }}>Decreament</button>
                        <button className="reset-btn" onClick={() => {
                            this.setState({
                                count1: 0
                            })
                        }}>Reset</button>
                    </div>
                    <h3 className="user-name">Name: {name}</h3>
                    <p className="user-location">Location: {location}</p>
                    <p className="user-role">Role: {role}</p>
                    <p className="user-coming-from">coming from {coming}</p>
                </div>
            </div>
        )
    }
}

export default UserClass;