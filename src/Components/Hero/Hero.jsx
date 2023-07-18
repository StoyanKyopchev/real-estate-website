import { useState, useEffect, useContext } from "react";
import { TranslatorContext } from "../../App";
import Navigation from "./Navigation/Navigation.jsx";
import Modal from "./Modal/Modal.jsx";
import "./hero.css"

export default function Header() {
    const [openModal, setOpenModal] = useState(false);
    const { t, i18n } = useContext(TranslatorContext);

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
    
    return (
        <>
            <Modal 
                isOpen={openModal} 
                onClose={() => setOpenModal(false)} 
            />
            <div className="heroWrapper">
                <Navigation setOpenModal={setOpenModal} />
                <div className="innerHeroWrapper">
                    <h1>{t("hero.header")}</h1>
                    <div className="searchBarWrapper">
                        <input 
                            type="text" 
                            placeholder="Enter an address, neighborhood, city, or postal code"
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