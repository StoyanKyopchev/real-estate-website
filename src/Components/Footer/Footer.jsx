import "./footer.css"

export default function Footer() {
    return (
        <>
            <footer className="footer" id="footerScroll">
                <div className="outerWrapper">
                    <div className="innerWrapper">
                        <div className="column">
                            <h3>Company</h3>
                            <ul>
                                <li>
                                    <a href="#footerScroll">About Us</a>
                                </li>
                                <li>
                                    <a href="#footerScroll">FAQ</a>
                                </li>
                                <li>
                                    <a href="#footerScroll">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#footerScroll">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>Online Consultancy</h3>
                            <ul>
                                <li>
                                    <a href="#footerScroll">Purchasing a Home</a>
                                </li>
                                <li>
                                    <a href="#footerScroll">Selling a Home</a>
                                </li>
                                <li>
                                    <a href="#footerScroll">Finding a rental home</a>
                                </li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>Contact us</h3>
                            <ul>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/locationIcon.png")} />
                                        2694 Locust View Drive, SF, CA
                                    </a>
                                </li>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/phoneIcon.png")} />
                                        +1 444-555-1111
                                    </a>
                                </li>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/emailIcon.png")} />
                                        mail@HomesA-Z.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="column socials">
                            <h3>Follow Us</h3>
                            <ul>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/fbIcon.png")} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/igIcon.png")} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/twIcon.png")} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#footerScroll">
                                        <img src={require("../../images/footerImages/lnIcon.png")} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}