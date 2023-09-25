import { useContext } from "react";
import { TranslatorContext } from "../../../../App";
import { Link } from "react-router-dom";
import "./listing.css"

export default function Listing({ home, setSelectedProperty }) {
    const { t } = useContext(TranslatorContext);

    return (
        <>
            <div className="listingWrapper" onClick={() => {setSelectedProperty(home.id)}}>
                <Link to="/selected-property">
                    <img src={ home.imgPath } />
                    <div className="listingBottomHalf">
                        <h3>{ home.city }</h3>
                        <p className="listingPrice">{ home.price }</p>
                        <p>{t("Main.Listing.listingDescription")}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}