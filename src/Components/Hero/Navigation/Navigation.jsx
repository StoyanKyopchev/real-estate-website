import { useState } from "react";
import Hamburger from "./hamburger/Hamburger.jsx";
import "./navigation.css";

export default function Navigation({ setOpenModal }) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    function toggleHamburger() {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <>
            <nav className="navWrapper">
                <div 
                    className="hamburgerWrapper"
                    onClick={toggleHamburger}
                >
                        <Hamburger isToggled={hamburgerOpen}/>
                </div>

                <a href="/" id="logoIcon">
                    <img src={require("../../../images/navImages/logoIcon.png")} alt="logo" />
                    HomesA-Z
                </a>
                <ul className="navInnerWrapper">
                    <li>
                        <a href="#getStarted">
                            <img src={require("../../../images/navImages/getStarted.png")} />
                            Get Started
                        </a>
                    </li>
                    <li>
                        <a href="#footerScroll">
                            <img src={require("../../../images/navImages/about.png")} />
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#footerScroll">
                            <img src={require("../../../images/navImages/contactUs.png")} />
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#" 
                            onClick={() => setOpenModal(true)}
                        >
                            <img src={require("../../../images/navImages/signIn.png")} />
                            Sign in
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}