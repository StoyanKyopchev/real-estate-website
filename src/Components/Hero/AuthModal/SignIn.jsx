import { useContext, useState, useRef } from "react";
import { TranslatorContext } from "../../../App";
import { useAuth } from "../../../Contexts/AuthContext";
import "./modal.css";

export default function SignIn({ isOpen, onClose }) {
    const { t } = useContext(TranslatorContext);
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signIn } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    if(!isOpen) return null;

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await signIn(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError(t("Hero.Modal.signInError"));
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
                        onClick={onClose}
                    >
                        &times;
                    </div>
                    <h3>{t("Hero.Modal.login")}</h3>
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
                    <div className="fieldWrapper">
                        <label htmlFor="password">{t("Hero.Modal.password")}</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder={t("Hero.Modal.passwordPlaceholder")}
                            ref={passwordRef}
                            required
                        />
                        <span className="inputStyle"></span>
                    </div>
                    <a href="#" className="forgotPassword">{t("Hero.Modal.forgotPassword")}</a>
                    <div className="submitBtnWrapper">
                        <button 
                            className="submitBtn"
                            type="submit"
                            disabled={loading}
                        >
                            {t("Hero.Modal.login")}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}