import { useState, useContext } from "react";
import { TranslatorContext } from "../../../App";
import Hamburger from "./hamburger/Hamburger.jsx";
import LanguageDropdown from "./languageDropdown/LanguageDropdown.jsx";
import "./navigation.css";

export default function Navigation({ setOpenModal, languageMenuOpen, toggleLanguageDropdown }) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const { t } = useContext(TranslatorContext);

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
                            {t("Hero.Navigation.languageBtn")}
                        </button>
                        <LanguageDropdown 
                            languageMenuOpen={languageMenuOpen} 
                            toggleLanguageDropdown={toggleLanguageDropdown}
                        />
                    </li>
                    <li>
                        <a href="#getStarted">
                            <img src={require("../../../images/navImages/getStarted.png")} />
                            {t("Hero.Navigation.getStartedBtn")}
                        </a>
                    </li>
                    <li>
                        <a href="#footerScroll">
                            <img src={require("../../../images/navImages/about.png")} />
                            {t("Hero.Navigation.aboutBtn")}
                        </a>
                    </li>
                    <li>
                        <a href="#footerScroll">
                            <img src={require("../../../images/navImages/contactUs.png")} />
                            {t("Hero.Navigation.contactUsBtn")}
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#" 
                            onClick={() => setOpenModal(true)}
                        >
                            <img src={require("../../../images/navImages/signIn.png")} />
                            {t("Hero.Navigation.signInBtn")}
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}