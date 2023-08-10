import { useState } from 'react';
import "./service.css"

export default function Service({ imgPath, heading, text, index, btntext }) {
    const [active, setActive] = useState({
        card: null,
        cardsObj: [
            {id: 1},
            {id: 2},
            {id: 3}
        ]
    });

    const handleMouseOver = (index) => {
        setActive({...active, card: active.cardsObj[index]});
    };
    
    const handleMouseOut = () => {
        setActive({...active, card: null});
    };

    function toggleActiveStyle(index) {
        if(active.cardsObj[index] === active.card) {
            return "serviceCardWrapper serviceCardWrapperActive"
        } else {
            return "serviceCardWrapper"
        }
    }

    return (
        <>
            <div 
                onMouseOver={() => {
                    handleMouseOver(index)
                }}
                onMouseOut={() => {
                    handleMouseOut()
                }}
                className={toggleActiveStyle(index)}
            >
                <div className="serviceCard">
                    <img src={imgPath} />
                    <div className="serviceCardBottom">
                        <h3>{heading}</h3>
                        <p>{text}</p>
                        <button>{btntext}</button>
                    </div>
                </div>
            </div>
        </>
    )
}