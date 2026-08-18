import Logo from "./LogoComponents/Logo";
import Cart_logo from "./LogoComponents/Cart_logo";
import { useState } from "react";

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
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li><Cart_logo /></li>
                        <li>
                            <button
                                className={`login-btn ${loginBtn === "LogOut" ? "logout" : ""}`}
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