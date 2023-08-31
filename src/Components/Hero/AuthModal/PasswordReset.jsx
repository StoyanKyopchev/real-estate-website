import { useContext, useState, useRef } from "react";
import { TranslatorContext } from "../../../App";
import { useAuth } from "../../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import "./modal.css";

export default function PasswordReset({ isOpen, onClose }) {
    const { t } = useContext(TranslatorContext);
    const emailRef = useRef();
    const { passwordReset } = useAuth();
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState();
    const [loading, setLoading] = useState(false);
    if(!isOpen) return null;

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setSuccessMessage("");
            setError("");
            setLoading(true);
            await passwordReset(emailRef.current.value);
            setSuccessMessage(t("Hero.Modal.resetPasswordSuccess"));
        } catch {
            setError(t("Hero.Modal.resetPasswordError"));
        }

        setLoading(false);
    }

    return (
        <>
            <div 
                className="overlay"
                onClick={() => {
                    onClose();
                    setError("");
                    setSuccessMessage("");
                }}
            >
                <form 
                    className="modalWrapper" 
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    onSubmit={handleSubmit}
                >
                    {error && <div className="errorAlert">{error}</div>}
                    {successMessage && <div className="successAlert">{successMessage}</div>}
                    <div 
                        className="closeBtn"
                        onClick={onClose}
                    >
                        &times;
                    </div>
                    <h3>{t("Hero.Modal.passwordReset")}</h3>
                    <div className="fieldWrapper">
                        <label htmlFor="email">{t("Hero.Modal.email")}</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder={t("Hero.Modal.emailPlaceholder")}
                            ref={emailRef}
                            required
                        />
                        <span className="inputStyle"></span>
                    </div>
                    <Link to="/signin" className="modalAltLink">{t("Hero.Modal.alreadyHaveAnAccount")}</Link>
                    <Link to="/signup"className="modalAltLink">{t("Hero.Modal.noAccount")}</Link>
                    <div className="modalPrimaryBtnWrapper">
                        <button 
                            className="modalPrimaryBtn"
                            type="submit"
                            disabled={loading}
                        >
                            {t("Hero.Modal.resetPassword")}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}