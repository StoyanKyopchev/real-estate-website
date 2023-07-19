import { useContext } from "react";
import { TranslatorContext } from "../../../App";
import Service from "./service/Service.jsx";
import "./services.css";

export default function Services() {
    const { t } = useContext(TranslatorContext);

    return (
        <>
            <div className="serviceCardsOuterWrapper">
                <div className="serviceCardsInnerWrapper">
                    <Service 
                        imgPath={require("../../../images/servicesImages/buyHome.jpg")}
                        heading={t("Main.Services.buyHeading")}
                        text={t("Main.Services.buyText")}
                        index={1}
                        btntext={t("Main.Services.buyBtnText")}
                    />
                    <Service 
                        imgPath={require("../../../images/servicesImages/sellHome.jpg")}
                        heading={t("Main.Services.sellHeading")}
                        text={t("Main.Services.sellText")}
                        index={2}
                        btntext={t("Main.Services.sellBtnText")}
                    />
                    <Service 
                        imgPath={require("../../../images/servicesImages/rentHome.jpg")}
                        heading={t("Main.Services.rentHeading")}
                        text={t("Main.Services.rentText")}
                        index={3}
                        btntext={t("Main.Services.rentBtnText")}
                    />
                </div>
            </div>
        </>
    )
}