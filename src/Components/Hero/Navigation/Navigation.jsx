import { useState } from "react";
import Hamburger from "./hamburger/Hamburger.jsx";
import "./navigation.css";

export default function Navigation({ setOpenModal, languageMenuOpen, toggleLanguageDropdown }) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    function toggleHamburger() {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <>
            <nav 
                className="navWrapper" 
                onClick={(e) => {e.stopPropagation();}}
            >
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
                        <button 
                            className="languageMenuButton"
                            onClick={toggleLanguageDropdown}
                        >
                            <img src={require("../../../images/navImages/language.png")} />
                            Language
                        </button>
                        <ul className={`languageDropdown ${languageMenuOpen ? "languageDropdownActive" : ""}`}>
                            <li>English</li>
                            <li>Français</li>
                        </ul>
                    </li>
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