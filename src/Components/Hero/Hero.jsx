import { useEffect, useContext } from "react";
import { TranslatorContext } from "../../App";
import "./hero.css"

export default function Hero({ setOpenModal, setLanguageMenuOpen }) {
    const { t } = useContext(TranslatorContext);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                setOpenModal(false);
                setLanguageMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <>
            <div 
                className="heroWrapper" 
                onClick={() => setLanguageMenuOpen(false)}
            >
                <div className="innerHeroWrapper">
                    <div className="headingWrapper">
                        <h1>{t("Hero.h1")}</h1>
                    </div>
                    <div className="searchBarOuterWrapper">
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
            </div>
        </>
    )
}