import { useContext, useState } from "react";
import { TranslatorContext } from "../../../App";
import { useAuth } from "../../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./modal.css";

export default function AccDashboard({ isOpen, onClose }) {
    const { t } = useContext(TranslatorContext);
    const { currentUser, signOut } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    if(!isOpen) return null;

    async function handleSignOut() {
        setError("");
        
        try {
            await signOut();
            navigate("/signin");
        } catch {
            setError(t("Hero.Modal.signOutError"));
        }
    }

    return (
        <>
            <div 
                className="overlay"
                onClick={() => {
                    onClose();
                    setError("");
                }}
            >
                <div 
                    className="modalWrapper"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {error && <div className="errorAlert">{error}</div>}
                    <div 
                        className="closeBtn"
                        onClick={onClose}
                    >
                        &times;
                    </div>
                    <h3>{t("Hero.Modal.myAccount")}</h3>
                    <div className="myAccountWrapper">
                        <span className="myAccountEmail">{t("Hero.Modal.email")}: </span>
                        <span className="myAccountCurrentEmail">{currentUser.email}</span>  
                    </div>
                    <div className="modalPrimaryBtnWrapper">
                        <button className="modalPrimaryBtn">{t("Hero.Modal.updateAccountBtn")}</button>
                    </div>
                    <div className="modalPrimaryBtnWrapper">
                        <button 
                            className="modalPrimaryBtn"
                            onClick={handleSignOut}
                        >
                            {t("Hero.Modal.logout")}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}