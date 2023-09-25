import { useContext } from "react";
import { TranslatorContext } from "../../App";
import Carousel from "./carousel/Carousel.jsx"
import Services from "./services/Services.jsx"
import "./main.css"

export default function Main({ setSelectedProperty }) {
    const { t } = useContext(TranslatorContext);

    return (
        <>
            <main id="getStarted">
                <h2>{t("Main.popularListings")}</h2>
                <Carousel setSelectedProperty={setSelectedProperty} />
                <Services />
            </main>
        </>
    )
}