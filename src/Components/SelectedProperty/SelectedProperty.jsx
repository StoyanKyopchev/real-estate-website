import { useContext } from "react";
import { TranslatorContext } from "../../App";
import "./selectedProperty.css"
import popularListings from "../Main/carousel/carouselListings/popularListings.json"

export default function SelectedProperty({ selectedProperty, setSelectedProperty }) {
    const { t } = useContext(TranslatorContext);

    return (
        <>
            {popularListings
            .filter((home) => home.id === selectedProperty)
            .map((home) => {
                return (
                    <div className="selectedPropertyWrapper" key={home.id}>
                        <img src={ home.imgPath } />
                        <div className="selectedPropertyRightHalf">
                            <div className="selectedPropertyRightHalfTopSide">
                                <h3>{ home.city }</h3>
                                <p className="selectedPropertyPrice">{ home.price }</p>
                            </div>
                            <p className="selectedPropertyDescription">{t("Main.Listing.listingDescription")}</p>
                            <br />
                            <p className="selectedPropertyDescription">{t("SelectedProperty.selectedPropertyDescription")}</p>
                        </div>
                    </div>
                );
            })}
        </>
    )
}