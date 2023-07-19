import { useContext } from "react";
import { TranslatorContext } from "../../App";
import Counter from "./counter/Counter.jsx";
import Accordion from "./accordion/Accordion.jsx";
import "./chooseUs.css";

export default function ChooseUs() {
    const { t } = useContext(TranslatorContext);

    return (
        <>
            <section>
                <div className="sectionLeftSide"></div>
                <div className="sectionRightSide">
                    <h2>{t("ChooseUs.chooseUsHeading")}</h2>
                    <Counter />
                    <p>{t("ChooseUs.chooseUsParagraph")}</p>
                    <Accordion />
                </div>
            </section>
        </>
    )
}