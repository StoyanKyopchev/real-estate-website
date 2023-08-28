import { useContext, useRef, useState } from "react";
import { TranslatorContext } from "../../../App";
import { useAuth } from "../../../Contexts/AuthContext";
import "./modal.css";

export default function Modal({ isOpen, onClose }) {
    const { t } = useContext(TranslatorContext);
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfRef = useRef();
    const { signUp } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    if(!isOpen) return null;

    async function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfRef.current.value) {
            return setError(t("Hero.Modal.signUpError"));
        }

        try {
            setError("");
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError("Failed to create an account")
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
                }}
            >
                <form 
                    className="form" 
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    onSubmit={handleSubmit}
                >
                    {error && <div className="errorAlert">{error}</div>}
                    <div 
                        className="closeBtn"
                        onClick={() => {
                            onClose();
                            setError("");
                        }}
                    >
                        &times;
                    </div>
                    <h3>{t("Hero.Modal.signUp")}</h3>
                    <div className="fieldWrapper">
                        <label htmlFor="email">{t("Hero.Modal.email")}</label>
                        <input 
                            type="email" 
                            name="email"
                            ref={emailRef}
                            placeholder={t("Hero.Modal.emailPlaceholder")}
                            required
                        />
                        <span className="inputStyle"></span>
                    </div>
                    <div className="fieldWrapper">
                        <label htmlFor="password">{t("Hero.Modal.password")}</label>
                        <input 
                            type="password" 
                            name="password"
                            ref={passwordRef}
                            placeholder={t("Hero.Modal.passwordPlaceholder")}
                            required
                        />
                        <span className="inputStyle"></span>
                    </div>
                    <div className="fieldWrapper">
                        <label htmlFor="password">{t("Hero.Modal.passwordConfirmation")}</label>
                        <input 
                            type="password" 
                            name="password"
                            ref={passwordConfRef} 
                            placeholder={t("Hero.Modal.passwordConfirmationPlaceholder")}
                            required
                        />
                        <span className="inputStyle"></span>
                    </div>
                    <a href="#" className="forgotPassword">{t("Hero.Modal.alreadyHaveAnAccount")}</a>
                    <div className="loginBtnWrapper">
                        <button 
                            className="loginBtn"
                            type="submit"
                            disabled={loading}
                        >
                            {t("Hero.Modal.signUp")}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}