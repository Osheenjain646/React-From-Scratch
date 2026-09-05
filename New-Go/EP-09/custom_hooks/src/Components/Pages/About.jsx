import UserClass from "../AboutData/UserClass";

const About = () => {
    return (
        <div className="page-container">
            <div className="about-card">
                <h1 className="page-title">About Us</h1>
                <UserClass name={"Osheen"} location={"New Delhi"} role={"Full Stack Developer"} coming={"class"} />
            </div>
        </div>
    );
};

export default About;


// import React from "react";
// import UserClass from "../AboutData/UserClass";

// class About extends React.Component {

//     constructor(props) {
//         console.log("Parent Constructor");
//         super(props);
//     }

//     componentDidMount() {
//         console.log("Parent Component did mount");
//     }

//     render() {
//         console.log("Parent Render");
//         return (
//             <div className="page-container">
//                 <div className="about-card">
//                     <h1 className="page-title">About Us</h1>
//                     <UserClass name={"Osheen"} location={"New Delhi"} role={"Full Stack Developer"} coming={"class"} />
//                 </div>
//             </div>
//         );
//     }
// }

// export default About;