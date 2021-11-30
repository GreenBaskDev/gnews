import { FC } from "react";
import { source } from "../../const/templateSource";
import { props } from "../../type/components/card";

const MainCard: FC<props> = (props) => {
    const { category, title, paragraph, editor, date } = props;


    return (
        <section className="mainCard">
            <div className="mainCard__imgWrapper">
                <img src={source.main} alt="main card" className="mainCard__imgMain"/>
            </div>
            <div className="mainCard__contentWrapper">
                <div className="mainCardContentWrapperText">
                    <h4 className="mainCardContentWrapperText__category">{category}</h4>
                    <h3 className="mainCardContentWrapperText__title">{title}</h3>
                    <p className="mainCardContentWrapperText__hook">{paragraph}</p>
                    <h6 className="mainCardContentWrapperText__autor">{editor}</h6>
                    <h6 className="mainCardContentWrapperText__date">{date}</h6>
                </div>
            </div>
        </section>
    )   
}

export default MainCard;