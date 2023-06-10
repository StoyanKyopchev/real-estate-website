import "./listing.css"

export default function Listing({ home }) {
    return (
        <>
            <div className="listingWrapper">
                <img src={ home.imgPath } />
                <h3>{ home.city }</h3>
                <p className="listingPrice">{ home.price }</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste voluptate quod 
                    deserunt reprehenderit cum ut odit nobis.
                </p>
            </div>
        </>
    )
}