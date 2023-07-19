import { useState, useEffect, useContext } from "react";
import { TranslatorContext } from "../../App";
import Navigation from "./Navigation/Navigation.jsx";
import Modal from "./Modal/Modal.jsx";
import "./hero.css"

export default function Header() {
    const [openModal, setOpenModal] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const { t } = useContext(TranslatorContext);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                setOpenModal(false);
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    function toggleLanguageDropdown() {
        setLanguageMenuOpen(!languageMenuOpen);
    }

    return (
        <>
            <Modal 
                isOpen={openModal} 
                onClose={() => setOpenModal(false)} 
            />
            <div 
                className="heroWrapper" 
                onClick={() => setLanguageMenuOpen(false)}
            >
                <Navigation 
                    setOpenModal={setOpenModal} 
                    toggleLanguageDropdown={toggleLanguageDropdown}
                    languageMenuOpen={languageMenuOpen}
                />
                <div className="innerHeroWrapper">
                    <h1>{t("Hero.h1")}</h1>
                    <div className="searchBarWrapper">
                        <input 
                            type="text" 
                            placeholder={t("Hero.placeholder")}
                            className="searchBar" 
                        />
                        <span className="searchButtonWrapper">
                            <button>
                                <img src={require("../../images/heroSectionImages/searchButton.png")} />
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}