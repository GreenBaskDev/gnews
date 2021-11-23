import { FC } from "react";
import { source } from "../../const/templateSource";
import "./style.scss";

const MainCard: FC = () => {

    return (
        <section className="mainCard">
            <div className="mainCard__imgWrapper">
                <img src={source.main} alt="main card" className="mainImg"/>
            </div>
            <div className="mainCard__contentWrapper">
                <p>ciao</p>
            </div>
        </section>
    )   
}

export default MainCard;