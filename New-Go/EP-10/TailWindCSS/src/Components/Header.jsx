import Logo from "./LogoComponents/Logo";
import Cart_logo from "./LogoComponents/Cart_logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <>
            <div className="flex justify-between items-center shadow-gray-500 shadow-sm rounded-2xl border-2 border-solid border-gray-300 mx-1 my-0.5 p-0.5">
                <div className="">
                    <Logo />
                </div>
                <div className="flex justify-between items-center gap-4 m-2 p-2">
                    <ul className="flex justify-space-between items-center p-1 m-2 whitespace-nowrap">
                        <li className="text: text-black text-m font-bold mx-1 px-2 py-1 cursor-pointer hover:text-blue-900 hover:scale-105 transition-all hover:underline">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text: text-black text-m font-bold mx-1 px-2 py-1 cursor-pointer hover:text-blue-900 hover:scale-105 transition-all hover:underline">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="text: text-black text-m font-bold mx-1 px-2 py-1 cursor-pointer hover:text-blue-900 hover:scale-105 transition-all hover:underline">
                            <Link to="/contactUs">Contact Us</Link>
                        </li>
                        <li className="text: text-black text-m font-bold mx-1 px-2 py-1 cursor-pointer hover:text-blue-900 hover:scale-105 transition-all hover:underline">
                            <Link to="/grocery">Grocery</Link>
                        </li>
                        <li className="flex justify-center">
                            <Cart_logo />
                        </li>
                        <li className="mx-1 px-2 py-1">
                            <button
                                className={`px-4 py-1 rounded-lg font-bold border-2 hover:cursor-pointer hover:scale-105 transition-all ${
                                    loginBtn === "LogOut"
                                        ? "bg-white text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
                                        : "bg-orange-500 text-white border-orange-500 hover:text-orange-500 hover:bg-white "
                                }`}
                                onClick={() => {
                                    setLoginBtn(loginBtn === "Login" ? "LogOut" : "Login");
                                }}
                            >
                                {loginBtn}
                            </button>
                        </li >
                        <li className="mx-1 px-2 py-1 flex items-center font-bold text-black">
                                <h3>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;