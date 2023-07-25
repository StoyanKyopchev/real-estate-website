import { useContext } from "react";
import { TranslatorContext } from "../../../../App";
import LanguageDropdown from "../languageDropdown/LanguageDropdown.jsx"
import "./hamburger.css";

export default function Hamburger({ isToggled, languageMenuOpen, toggleLanguageDropdown, toggleHamburger }) {
    const { t } = useContext(TranslatorContext);

    return (
        <>
            <div 
                className="hamburgerButton" 
                onClick={toggleHamburger}
            >
                <div className={`hamburger ${isToggled ? "hamburger1" : ""}`}></div>
                <div className={`hamburger ${isToggled ? "hamburger2" : ""}`}></div>
                <div className={`hamburger ${isToggled ? "hamburger3" : ""}`}></div>
            </div>

            <div className={`hamburgerMenu ${isToggled ? "hamburgerMenuActive" : ""}`}>
                <ul>
                    <li>
                        <a href="#getStarted">
                            <img src={require("../../../../images/navImages/getStarted.png")} />
                            {t("Hero.Navigation.getStartedBtn")}
                        </a>
                    </li>
                    <li>
                        <a href="#footerScroll">
                            <img src={require("../../../../images/navImages/about.png")} />
                            {t("Hero.Navigation.aboutBtn")}
                        </a>
                    </li>
                    <li>
                        <a href="#footerScroll">
                            <img src={require("../../../../images/navImages/contactUs.png")} />
                            {t("Hero.Navigation.contactUsBtn")}
                        </a>
                    </li>
                    <li>
                        <button 
                            className="languageMenuButton"
                            onClick={toggleLanguageDropdown}
                        >
                            <img src={require("../../../../images/navImages/language.png")} />
                            {t("Hero.Navigation.languageBtn")}
                        </button>
                        <LanguageDropdown 
                            languageMenuOpen={languageMenuOpen} 
                            toggleLanguageDropdown={toggleLanguageDropdown}
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}