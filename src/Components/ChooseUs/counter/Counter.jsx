import { useContext } from "react";
import { TranslatorContext } from "../../../App";
import CountUp from "react-countup";
import "./counter.css";

export default function Counter() {
    const { t } = useContext(TranslatorContext);

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
                    <span>{t("ChooseUs.Counter.homesForSale")}</span>
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
                    <span>{t("ChooseUs.Counter.recentlySold")}</span>
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
                    <span>{t("ChooseUs.Counter.happyCustomers")}</span>
                </div>
            </div>
        </>
    )
}