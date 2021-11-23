import { FC } from "react";
import Header from "../../components/header";
import MainCard from "../../components/mainCard";
import "./style.scss";

const Landing: FC = () => {

    return (
        <>
            <Header />
            <main className="main">
                <MainCard />
            </main>
        </>
    )
}

export default Landing;