import { useContext, useRef, useState } from "react";
import { TranslatorContext } from "../../../App";
import { useAuth } from "../../../Contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./modal.css";

export default function SignUp({ isOpen, onClose }) {
    const { t } = useContext(TranslatorContext);
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfRef = useRef();
    const { signUp } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    if(!isOpen) return null;

    async function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfRef.current.value) {
            return setError(t("Hero.Modal.signUpPasswordError"));
        }

        try {
            setError("");
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            setError(t("Hero.Modal.signUpAccountError"));
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
                    className="modalWrapper" 
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
                    <Link to="/signin" className="modalAltLink">{t("Hero.Modal.alreadyHaveAnAccount")}</Link>
                    <div className="modalPrimaryBtnWrapper">
                        <button 
                            className="modalPrimaryBtn"
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