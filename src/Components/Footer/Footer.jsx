import { useContext } from "react";
import { TranslatorContext } from "../../App";
import "./footer.css"

export default function Footer() {
    const { t } = useContext(TranslatorContext);

    return (
        <>
            <footer className="footer" id="footerScroll">
                <div className="outerWrapper">
                    <div className="innerWrapper">
                        <div className="column">
                            <h3>{t("Footer.column1.company")}</h3>
                            <ul>
                                <li>
                                    <a href="#footerScroll">{t("Footer.column1.aboutUs")}</a>
                                </li>
                                <li>
                                    <a href="#footerScroll">{t("Footer.column1.faq")}</a>
                                </li>
                                <li>
                                    <a href="#footerScroll">{t("Footer.column1.privacyPolicy")}</a>
                                </li>
                                <li>
                                    <a href="#footerScroll">{t("Footer.column1.termsAndConditions")}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>{t("Footer.column2.onlineConsultancy")}</h3>
                            <ul>
                                <li>
                                    <a href="#footerScroll">{t("Footer.column2.purchasingHome")}</a>
                                </li>
                                <li>
                                    <a href="#footerScroll">{t("Footer.column2.sellingHome")}</a>
                                </li>
                                <li>
                                    <a href="#footerScroll">{t("Footer.column2.findingRental")}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>{t("Footer.column3.contactUs")}</h3>
                            <ul>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/locationIcon.png")} />
                                        2694 Locust View Drive, SF, CA
                                    </a>
                                </li>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/phoneIcon.png")} />
                                        +1 444-555-1111
                                    </a>
                                </li>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/emailIcon.png")} />
                                        mail@HomesA-Z.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="column socials">
                            <h3>{t("Footer.column4.followUs")}</h3>
                            <ul>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/fbIcon.png")} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/igIcon.png")} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/twIcon.png")} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/lnIcon.png")} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}