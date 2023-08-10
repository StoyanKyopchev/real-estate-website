import { useContext } from "react";
import { TranslatorContext } from "../../../../App";
import "./listing.css"

export default function Listing({ home }) {
    const { t } = useContext(TranslatorContext);

    return (
        <>
            <div className="listingWrapper">
                <img src={ home.imgPath } />
                <div className="listingBottomHalf">
                    <h3>{ home.city }</h3>
                    <p className="listingPrice">{ home.price }</p>
                    <p>{t("Main.Listing.listingDescription")}</p>
                </div>
            </div>
        </>
    )
}