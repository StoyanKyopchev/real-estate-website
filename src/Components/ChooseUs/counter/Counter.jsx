import CountUp from "react-countup";
import "./counter.css";

export default function Counter() {
    return (
        <>
            <div className="counterWrapper">
                <div className="counter">
                    <span className="count">
                        <CountUp 
                            start={99500} 
                            end={100000} 
                            duration={4} 
                            enableScrollSpy 
                        />
                        <span> +</span>
                    </span>
                    <span>Homes for sale</span>
                </div>
                <div className="counter">
                    <span className="count">
                        <CountUp 
                            start={1300} 
                            end={1400} duration={4} 
                            enableScrollSpy 
                        />
                        <span> +</span>
                    </span>
                    <span>Recently sold</span>
                </div>
                <div className="counter">
                    <span className="count">
                        <CountUp 
                            start={7900} 
                            end={8000} 
                            duration={4} 
                            enableScrollSpy 
                        />
                        <span> +</span>
                    </span>
                    <span>Happy customers</span>
                </div>
            </div>
        </>
    )
}