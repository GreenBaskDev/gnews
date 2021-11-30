import { FC } from "react";
import { props } from "../../type/components/articleHeader";


const ArticleHeader: FC<props> = (props) => {

    const { title } = props;

    return (

        <section className="articleHeader">
            <div className="articleHeader__wrapper">
                <h2 className="articleHeader__title">{title.toUpperCase()}</h2>
            </div>
        </section>

    );

}

export default ArticleHeader;