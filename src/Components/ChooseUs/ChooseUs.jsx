import Counter from "./counter/Counter.jsx";
import Accordion from "./accordion/Accordion.jsx";
import "./chooseUs.css";

export default function ChooseUs() {
    return (
        <>
            <section>
                <div className="sectionLeftSide"></div>
                <div className="sectionRightSide">
                    <h2>Why choose us?</h2>
                    <Counter />
                    <p>
                        Our track record speaks for itself. We have worked with thousands of people in the United States, and all 
                        across Europe. Feel free to ask for verified testimonials if you'd like to see what our past clients think 
                        of our work!
                    </p>
                    <Accordion />
                </div>
            </section>
        </>
    )
}