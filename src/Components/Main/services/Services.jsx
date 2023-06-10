import Service from "./service/Service.jsx";
import "./services.css";

export default function Services() {
    return (
        <>
            <div className="serviceCardsOuterWrapper">
                <div className="serviceCardsInnerWrapper">
                    <Service 
                        imgPath={require("../../../images/servicesImages/buyHome.jpg")}
                        heading={"Buy a home"}
                        text={"HomesA-Z can match you with a house you will want to call home in any region and neighborhood."}
                        index={1}
                        btntext={"Browse homes"}
                    />
                    <Service 
                        imgPath={require("../../../images/servicesImages/sellHome.jpg")}
                        heading={"Sell a home"}
                        text={"No matter what path you take to sell your home, we can help you navigate a successful sale."}
                        index={2}
                        btntext={"See your options"}
                    />
                    <Service 
                        imgPath={require("../../../images/servicesImages/rentHome.jpg")}
                        heading={"Rent a home"}
                        text={"With our big selection of rental properties, we can help you find rental housing that you will love."}
                        index={3}
                        btntext={"Find rentals"}
                    />
                </div>
            </div>
        </>
    )
}