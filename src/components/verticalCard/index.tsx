import { FC } from "react";
import { source } from "../../const/templateSource";
import { props } from "../../type/components/card";

const VerticalCard: FC<props> = (props) => {
    const { category, title, paragraph, editor, date } = props;


    return (
        <div className="verticalCard">
            <div className="verticalCard__imgWrapper">
                <img src={source.main} alt="main card" className="verticalCard__imgMain"/>
            </div>
            <div className="verticalCard__contentWrapper">
                <div className="verticalCardContentWrapperText">
                    <h4 className="verticalCardContentWrapperText__category">{category}</h4>
                    <h2 className="verticalCardContentWrapperText__title">{title}</h2>
                     <p className="verticalCardContentWrapperText__hook">{paragraph}</p>
                    <h5 className="verticalCardContentWrapperText__autor">{editor}</h5>
                    <h6 className="verticalCardContentWrapperText__date">{date}</h6>
                </div>
            </div>
        </div>
    )   
}

export default VerticalCard;