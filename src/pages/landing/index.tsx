import { FC } from "react";
import Header from "../../components/header";
import MainCard from "../../components/mainCard";
import "./style.scss";

const Landing: FC = () => {

    return (
        <div className="landing">
            <Header />
            <main className="main">
                <MainCard 
                    category={"Film"}
                    title={"Er valt veel te leren in de zelfgeknutselde pornowereld van Tara Emory"}
                    paragraph={"In The End of Wonderland zie je hoe creatief, maar ook hoe veeleisend de seksindustrie kan zijn."}
                    editor={"AMARENS EGGERAAT"}
                    date={"22.11.21"}
                />
            </main>
        </div>
    )
}

export default Landing;