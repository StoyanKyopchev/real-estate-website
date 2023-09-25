import { useContext, useState, useRef, useEffect } from "react";
import { TranslatorContext } from "../../App";
import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./modal.css";

export default function SignIn({ isOpen, onClose }) {
    const { t } = useContext(TranslatorContext);
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signIn } = useAuth();
    const [error, setError] = useState("");
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

        try {
            setError("");
            setLoading(true);
            await signIn(emailRef.current.value, passwordRef.current.value);
            navigate(previousLocation);
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
                    <h3>{t("Hero.Modal.signIn")}</h3>
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
                    <Link 
                        to="/sign-up"
                        state={{ previousLocation: previousLocation }}
                        className="modalAltLink"
                    >
                        {t("Hero.Modal.noAccount")}
                    </Link>
                    <Link 
                        to="/password-reset"
                        state={{ previousLocation: previousLocation }}
                        className="modalAltLink"
                    >
                        {t("Hero.Modal.forgotPassword")}
                    </Link>
                    <div className="modalPrimaryBtnWrapper">
                        <button 
                            className="modalPrimaryBtn"
                            type="submit"
                            disabled={loading}
                        >
                            {t("Hero.Modal.signIn")}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}