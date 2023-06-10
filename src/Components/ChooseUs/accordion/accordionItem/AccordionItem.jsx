import "./accordionItem.css"

export default function AccordionItem({ item, toggle, clicked, index }) {
    return (
        <>
            <div className="accordionItem">
                <div 
                    className="accordionHandle"
                    onClick={() => toggle(index)}
                >
                    <p>{item.handleText}</p>
                    <img 
                        src={require("../../../../images/chooseUsSectionImages/dropDownIcon.png")} 
                        className={clicked === index ? "rotateIcon" : ""}
                    />
                </div>
                <div 
                    className={clicked === index ? "accordionContent visible" : "accordionContent"}
                >
                    <p>{item.contentText}</p>
                </div>
            </div>
        </>
    )
}