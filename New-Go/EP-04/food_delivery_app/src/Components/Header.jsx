import Logo from "./LogoComponents/Logo";
import Cart_logo from "./LogoComponents/Cart_logo";


const Header = () => {
    return (
        <>
        <div className="header-component">
            <div className="logo-component">
                <Logo/>
            </div>
            <div className="nav-links-component">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><Cart_logo/></li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Header;