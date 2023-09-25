import { useContext, useState, useEffect } from "react";
import { TranslatorContext } from "../../App";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./modal.css";

export default function AccDashboard({ isOpen, onClose }) {
    const { t } = useContext(TranslatorContext);
    const { currentUser, signOut } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const previousLocation = location.state.previousLocation;

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
                navigate(previousLocation);
            }
        };

        document.addEventListener("keydown", handleEscape);
        
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);
    
    if(!isOpen) return null;

    async function handleSignOut() {
        setError("");
        
        try {
            await signOut();
            navigate(previousLocation);
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
                    navigate(previousLocation);
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
                        onClick={() => {
                            onClose();
                            setError("");
                            navigate(previousLocation);
                        }}
                    >
                        &times;
                    </div>
                    <h3>{t("Hero.Modal.myAccount")}</h3>
                    <div className="myAccountWrapper">
                        <span className="myAccountEmail">{t("Hero.Modal.email")}: </span>
                        <span className="myAccountCurrentEmail">{currentUser.email}</span>  
                    </div>
                    <div className="modalPrimaryBtnWrapper">
                        <Link 
                            to ="/account-update"
                            state={{ previousLocation: previousLocation }} 
                            className="modalPrimaryBtn modalLink"
                        >
                            {t("Hero.Modal.updateAccount")}
                        </Link>
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