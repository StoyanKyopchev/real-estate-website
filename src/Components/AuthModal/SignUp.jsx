import { useContext, useRef, useState, useEffect } from "react";
import { TranslatorContext } from "../../App";
import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./modal.css";

export default function SignUp({ isOpen, onClose }) {
    const { t } = useContext(TranslatorContext);
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfRef = useRef();
    const { signUp } = useAuth();
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState();
    const [loading, setLoading] = useState(false);
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

    async function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfRef.current.value) {
            return setError(t("Hero.Modal.signUpPasswordError"));
        }

        try {
            setSuccessMessage("");
            setError("");
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value);
            setSuccessMessage(t("Hero.Modal.signUpSuccess"));
            setTimeout(() => {navigate(previousLocation)}, 2500);
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
                    setSuccessMessage("");
                    navigate(previousLocation);
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
                        onClick={() => {
                            onClose();
                            setError("");
                            setSuccessMessage("");
                            navigate(previousLocation);
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
                    <Link 
                        to="/sign-in"
                        state={{ previousLocation: previousLocation }}
                        className="modalAltLink"
                    >
                        {t("Hero.Modal.alreadyHaveAnAccount")}
                    </Link>
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