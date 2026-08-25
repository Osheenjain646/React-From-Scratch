import Logo from "./LogoComponents/Logo";
import Cart_logo from "./LogoComponents/Cart_logo";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    return (
        <>
            <div className="header-component">
                <div className="logo-component">
                    <Logo />
                </div>
                <div className="nav-links-component">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contactUs">Contact Us</Link>
                        </li>
                        <li><Cart_logo /></li>
                        <li>
                            <button
                                className={`${loginBtn === "LogOut" ? "logout" : "login"}-btn`}
                                onClick={() => {
                                    setLoginBtn(loginBtn === "Login" ? "LogOut" : "Login");
                                }}
                            >
                                {loginBtn}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;