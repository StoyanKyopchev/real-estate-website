import Carousel from "./carousel/Carousel.jsx"
import Services from "./services/Services.jsx"
import "./main.css"

export default function Main() {
    return (
        <>
            <main id="getStarted">
                <h2>Popular Listings</h2>
                <Carousel />
                <Services />
            </main>
        </>
    )
}