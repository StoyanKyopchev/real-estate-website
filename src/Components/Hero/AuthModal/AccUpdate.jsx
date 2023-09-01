import { useContext, useRef, useState } from "react";
import { TranslatorContext } from "../../../App";
import { useAuth } from "../../../Contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./modal.css";

export default function AccUpdate({ isOpen, onClose }) {
    const { t } = useContext(TranslatorContext);
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfRef = useRef();
    const { changeEmail, changePassword, currentUser } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    if(!isOpen) return null;

    async function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfRef.current.value) {
            return setError(t("Hero.Modal.signUpPasswordError"));
        }

        try {
            setError("");
            setLoading(true);

            if (emailRef.current.value !== currentUser.email) {
                await changeEmail(emailRef.current.value);
                navigate("/");
            }
            if (passwordRef.current.value) {
                await changePassword(passwordRef.current.value);
                navigate("/");
            }

        } catch {
            setError(t("Hero.Modal.updateAccountError"));
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
                    <h3>{t("Hero.Modal.updateAccount")}</h3>
                    <div className="fieldWrapper">
                        <label htmlFor="email">{t("Hero.Modal.email")}</label>
                        <input 
                            type="email" 
                            name="email"
                            ref={emailRef}
                            defaultValue={currentUser.email}
                        />
                        <span className="inputStyle"></span>
                    </div>
                    <div className="fieldWrapper">
                        <label htmlFor="password">{t("Hero.Modal.password")}</label>
                        <input 
                            type="password" 
                            name="password"
                            ref={passwordRef}
                            placeholder={t("Hero.Modal.updatePasswordPlaceholder")}
                        />
                        <span className="inputStyle"></span>
                    </div>
                    <div className="fieldWrapper">
                        <label htmlFor="password">{t("Hero.Modal.passwordConfirmation")}</label>
                        <input 
                            type="password" 
                            name="password"
                            ref={passwordConfRef} 
                            placeholder={t("Hero.Modal.updatePasswordPlaceholder")}
                        />
                        <span className="inputStyle"></span>
                    </div>
                    <div className="modalPrimaryBtnWrapper">
                        <button 
                            className="modalPrimaryBtn"
                            type="submit"
                            disabled={loading}
                        >
                            {t("Hero.Modal.updateAccount")}
                        </button>
                    </div>
                    <div className="modalPrimaryBtnWrapper">
                        <Link 
                            to ="/" 
                            className="modalPrimaryBtn modalLink"
                        >
                            {t("Hero.Modal.cancel")}
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}