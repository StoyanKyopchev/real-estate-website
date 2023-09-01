import { useState, useEffect, useContext } from "react";
import { TranslatorContext } from "../../App";
import { AuthProvider } from "../../Contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import AccDashboard from "./AuthModal/AccDashboard";
import SignIn from "./AuthModal/SignIn";
import SignUp from "./AuthModal/SignUp";
import PrivateRoute from "./AuthModal/PrivateRoute";
import PasswordReset from "./AuthModal/PasswordReset";
import AccUpdate from "./AuthModal/AccUpdate";
import "./hero.css"

export default function Hero() {
    const [openModal, setOpenModal] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
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

    function toggleLanguageDropdown() {
        setLanguageMenuOpen(!languageMenuOpen);
    }

    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route 
                        exact path="/"
                        element={
                                <PrivateRoute>
                                    <AccDashboard 
                                        isOpen={openModal} 
                                        onClose={() => setOpenModal(false)}
                                    />
                                </PrivateRoute>
                        }
                    />
                    <Route 
                        path="/signup" 
                        element={<SignUp 
                                    isOpen={openModal} 
                                    onClose={() => setOpenModal(false)} 
                                />} 
                    />
                    <Route 
                        path="/signin" 
                        element={<SignIn 
                                    isOpen={openModal} 
                                    onClose={() => setOpenModal(false)} 
                                />} 
                    />
                    <Route
                        path="/passwordreset"
                        element={<PasswordReset
                                    isOpen={openModal} 
                                    onClose={() => setOpenModal(false)}  
                                />}
                    />
                    <Route 
                        path="/accountupdate"
                        element={
                                <PrivateRoute>
                                    <AccUpdate
                                        isOpen={openModal}
                                        onClose={() => setOpenModal(false)}
                                    />
                                </PrivateRoute>
                        }
                    />
                </Routes>
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
            </AuthProvider>
        </>
    )
}