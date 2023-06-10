import { useState } from "react";
import AccordionItem from "./accordionItem/AccordionItem.jsx";
import accordionData from "./accordionItem/accordionData.json";

export default function Accordion() {

    const [clicked, setClicked] = useState(null);

    function toggle(i) {
        if(clicked === i) {
            return setClicked(null)
        }
        setClicked(i)
    }

    return (
        <>
            <div className="accordionWrapper">
                {accordionData.map((item, index) => {
                    return (
                        <AccordionItem 
                            item={item} 
                            key={item.id} 
                            toggle={toggle} 
                            clicked={clicked} 
                            index={index} 
                        />
                    );
                })}
            </div>
        </>
    )
}