import "./hamburger.css";

export default function Hamburger({ isToggled }) {
    return (
        <>
            <div className="hamburgerButton">
                <div className={`hamburger ${isToggled ? "hamburger1" : ""}`}></div>
                <div className={`hamburger ${isToggled ? "hamburger2" : ""}`}></div>
                <div className={`hamburger ${isToggled ? "hamburger3" : ""}`}></div>
            </div>

            <div className={`hamburgerMenu ${isToggled ? "hamburgerMenuActive" : ""}`}>
                <ul>
                    <li>
                        <a href="#getStarted">
                            <img src={require("../../../../images/navImages/getStarted.png")} />
                            Get Started
                        </a>
                    </li>
                    <li>
                        <a href="#footerScroll">
                            <img src={require("../../../../images/navImages/about.png")} />
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#footerScroll">
                            <img src={require("../../../../images/navImages/contactUs.png")} />
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}