import { useContext } from "react";
import { TranslatorContext } from "../../../../App";
import "./accordionItem.css"

export default function AccordionItem({ item, toggle, clicked, index }) {

    const { i18n } = useContext(TranslatorContext);
    let currentLanguage = i18n.language;

    return (
        <>
            <div className="accordionItem">
                <div 
                    className="accordionHandle"
                    onClick={() => toggle(index)}
                >
                    <p>{item[currentLanguage].handleText}</p>
                    <img 
                        src={require("../../../../images/chooseUsSectionImages/dropDownIcon.png")} 
                        className={clicked === index ? "rotateIcon" : ""}
                    />
                </div>
                <div 
                    className={clicked === index ? "accordionContent visible" : "accordionContent"}
                >
                    <p>{item[currentLanguage].contentText}</p>
                </div>
            </div>
        </>
    )
}