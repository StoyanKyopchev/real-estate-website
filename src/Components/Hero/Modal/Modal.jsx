import { useContext } from "react";
import { TranslatorContext } from "../../../App";
import "./modal.css";

export default function Modal({ isOpen, onClose }) {
    const { t } = useContext(TranslatorContext);
    if(!isOpen) return null;

    return (
        <>
            <div 
                className="overlay"
                onClick={onClose}
            >
                <form 
                    className="form" 
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div 
                        className="closeBtn"
                        onClick={onClose}
                    >
                        &times;
                    </div>
                    <h3>{t("Hero.Modal.login")}</h3>
                    <div className="fieldWrapper">
                        <label htmlFor="username">{t("Hero.Modal.username")}</label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder={t("Hero.Modal.usernamePlaceholder")}
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
                            required
                        />
                        <span className="inputStyle"></span>
                    </div>
                    <a href="#" className="forgotPassword">{t("Hero.Modal.forgotPassword")}</a>
                    <div className="loginBtnWrapper">
                        <button className="loginBtn">{t("Hero.Modal.login")}</button>
                    </div>
                    <p>{t("Hero.Modal.altSignInOptions")}</p>
                    <div className="socialMediaWrapper">
                        <img src={require("../../../images/heroSectionImages/modalImages/fbIcon.png")} />
                        <img src={require("../../../images/heroSectionImages/modalImages/twIcon.png")} />
                        <img src={require("../../../images/heroSectionImages/modalImages/googleIcon.png")} />
                    </div>
                </form>
            </div>
        </>
    )
}